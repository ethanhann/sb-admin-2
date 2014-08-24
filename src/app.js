angular.module('sbAdmin2', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('sbAdmin2', {
            abstract: true,
            templateUrl: 'app.html'
        })
        .state('sbAdmin2.authenticated', {
            abstract: true,
            templateUrl: 'authenticated/authenticated.html'
        })
        .state('sbAdmin2.authenticated.blank', {
            url: '/blank',
            templateUrl: 'blank/blank.html'
        })
        .state('sbAdmin2.authenticated.buttons', {
            url: '/buttons',
            templateUrl: 'buttons/buttons.html'
        })
        .state('sbAdmin2.authenticated.dashboard', {
            url: '/',
            templateUrl: 'dashboard/dashboard.html'
        })
        .state('sbAdmin2.authenticated.flot', {
            url: '/flot',
            templateUrl: 'flot/flot.html'
        })
        .state('sbAdmin2.authenticated.forms', {
            url: '/forms',
            templateUrl: 'forms/forms.html'
        })
        .state('sbAdmin2.authenticated.grid', {
            url: '/grid',
            templateUrl: 'grid/grid.html'
        })
        .state('sbAdmin2.authenticated.morris', {
            url: '/morris',
            templateUrl: 'morris/morris.html',
            controller: 'MorrisCtrl'
        })
        .state('sbAdmin2.authenticated.notifications', {
            url: '/notifications',
            templateUrl: 'notifications/notifications.html'
        })
        .state('sbAdmin2.authenticated.panels-wells', {
            url: '/panels-wells',
            templateUrl: 'panels-wells/panels-wells.html'
        })
        .state('sbAdmin2.authenticated.tables', {
            url: '/tables',
            templateUrl: 'tables/tables.html'
        })
        .state('sbAdmin2.authenticated.typography', {
            url: '/typography',
            templateUrl: 'typography/typography.html'
        })
        .state('sbAdmin2.login', {
            url: '/login',
            templateUrl: 'login/login.html'
        });
}]);
