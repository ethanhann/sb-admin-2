var gulp = require('gulp');
// do not use gulp-load-plugins so that we know our dependencies
var autoprefixer = require('gulp-autoprefixer');
var bower = require('bower');
var changed = require('gulp-changed');
var child = require('child_process');
var connect = require('connect');
connect.livereload = require('connect-livereload');
var csso = require('gulp-csso');
var del = require('del');
var extend = require('extend');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var livereload = require('gulp-livereload');
var ngAnnotate = require('gulp-ng-annotate');
var opn = require('opn');
var os = require('os');
var path = require('path');
var rev = require('gulp-rev');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var symlink = require('gulp-symlink');
var template = require('gulp-template');
var through = require('through2');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var wiredep = require('wiredep').stream;
var yargs = require('yargs');

var argv = yargs.argv;

var defaultConfig = {
    src: 'src',
    dst: argv.dev ? 'dev' : 'prod',
    port: 0,
    dev: false
};

// context for templates; exposes dev === true for some builds
// config should be overridden in a config target that executes first
var config = extend({}, defaultConfig, argv)

gulp.task('bower', function (cb) {
    bower.commands
        .install([])
        .on('end', function () {
            cb();
        });
});

gulp.task('symlink', ['bower'], function () {
    return gulp.src('bower_components')
        .pipe(symlink(config.dst))
});

gulp.task('wiredep', function () {
    return gulp.src('index.html', {cwd: config.src})
        .pipe(through.obj(function (file, enc, next) {
            file.base = process.cwd()
            file.path = path.resolve(file.base, 'index.html')
            this.push(file)
            next()
        }))
        .pipe(wiredep({
            //exclude: [/html5-boilerplate/, 'bower_components/bootstrap/dist/js']
        }))
        .pipe(gulp.dest(config.src));
});

gulp.task('jshint', function () {
    return gulp.src('**/*.js', {cwd: config.src})
        .pipe(changed(config.dst))
        .pipe(template(config))
        .pipe(jshint({predef: ['console']}))
        .pipe(jshint.reporter(jshintStylish));
});

gulp.task('copy', ['bower'].concat(config.dev ? ['symlink'] : []),
    function () {
        var jsPipe = [
            sourcemaps.init(),
            sourcemaps.write(),
            'concat',
            sourcemaps.init({loadMaps: true}),
            uglify({mangle: false}),
            rev(),
            sourcemaps.write('.')
        ];

        var htmlPipe = usemin({
            css: [
                template(config),
                autoprefixer(),
                csso(),
                rev()
            ],
            rawjs: jsPipe,
            js: [template(config), ngAnnotate()].concat(jsPipe)
        });

        return gulp.src(config.src + '/**')
            .pipe(changed(config.dst))
            .pipe(gulpif(/.*\.(html|css|js)/, template(config)))
            .pipe(gulpif(!config.dev, gulpif(/.*\/index\.html/, htmlPipe)))
            .pipe(gulp.dest(config.dst))
            .pipe(size({title: 'copy', showFiles: true}));
    });

gulp.task('build', ['jshint', 'copy']);

gulp.task('serve', function (cb) {
    var server = connect()
        .use(connect.livereload())
        .use(connect.static(config.dst))
        .listen(config.port)
        .on('error', function (error) {
            gutil.log(gutil.colors.red('error: ') + 'failed to start server');
            cb(error);
        })
        .on('listening', function () {
            var host = os.hostname();
            var port = this.address().port;
            var url = 'http://' + host + ':' + port;
            gutil.log('serving at ' + gutil.colors.magenta(url));
            opn(url);
            cb();
        })
});

gulp.task('watch', ['build', 'serve'], function () {
    livereload.listen();
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch(config.src + '/**', ['build']);
});

gulp.task('clean', function (cb) {
    del(config.dst, cb);
});

gulp.task('default', ['build']);
