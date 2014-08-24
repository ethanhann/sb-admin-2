angular.module('sbAdmin2', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('sbAdmin2', {
            abstract: true,
            templateUrl: 'app.html'
        })
        .state('sbAdmin2.blank', {
            url: '/blank',
            templateUrl: 'blank/blank.html'
        })
        .state('sbAdmin2.buttons', {
            url: '/buttons',
            templateUrl: 'buttons/buttons.html'
        })
        .state('sbAdmin2.dashboard', {
            url: '/',
            templateUrl: 'dashboard/dashboard.html'
        })
        .state('sbAdmin2.flot', {
            url: '/flot',
            templateUrl: 'flot/flot.html'
        })
        .state('sbAdmin2.forms', {
            url: '/forms',
            templateUrl: 'forms/forms.html'
        })
        .state('sbAdmin2.grid', {
            url: '/grid',
            templateUrl: 'grid/grid.html'
        })
        .state('sbAdmin2.login', {
            url: '/login',
            templateUrl: 'login/login.html'
        })
        .state('sbAdmin2.morris', {
            url: '/morris',
            templateUrl: 'morris/morris.html',
            controller: 'MorrisCtrl'
        })
        .state('sbAdmin2.notifications', {
            url: '/notifications',
            templateUrl: 'notifications/notifications.html'
        })
        .state('sbAdmin2.panels-wells', {
            url: '/panels-wells',
            templateUrl: 'panels-wells/panels-wells.html'
        })
        .state('sbAdmin2.tables', {
            url: '/tables',
            templateUrl: 'tables/tables.html'
        })
        .state('sbAdmin2.typography', {
            url: '/typography',
            templateUrl: 'typography/typography.html'
        });
}]);
