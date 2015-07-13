'use strict';

angular.module('sbAdmin2', [
    'eehFlot',
    'eehMorris',
    'eehNavigation',
    'ngAnimate',
    'ngResource',
    'ui.bootstrap',
    'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', 'eehNavigationProvider',
function ($stateProvider, $urlRouterProvider, eehNavigationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('sbAdmin2', {
            abstract: true,
            templateUrl: 'app/app.html'
        })
        .state('sbAdmin2.authenticated', {
            abstract: true,
            templateUrl: 'app/authenticated/authenticated.html'
        })
        .state('sbAdmin2.authenticated.blank', {
            url: '/blank',
            templateUrl: 'app/blank/blank.html'
        })
        .state('sbAdmin2.authenticated.buttons', {
            url: '/buttons',
            templateUrl: 'app/buttons/buttons.html'
        })
        .state('sbAdmin2.authenticated.dashboard', {
            url: '/',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController'
        })
        .state('sbAdmin2.authenticated.flot', {
            url: '/flot',
            templateUrl: 'app/flot/flot.html',
            controller: 'FlotController'
        })
        .state('sbAdmin2.authenticated.forms', {
            url: '/forms',
            templateUrl: 'app/forms/forms.html'
        })
        .state('sbAdmin2.authenticated.grid', {
            url: '/grid',
            templateUrl: 'app/grid/grid.html'
        })
        .state('sbAdmin2.authenticated.morris', {
            url: '/morris',
            templateUrl: 'app/morris/morris.html',
            controller: 'MorrisCtrl'
        })
        .state('sbAdmin2.authenticated.notifications', {
            url: '/notifications',
            templateUrl: 'app/notifications/notifications.html'
        })
        .state('sbAdmin2.authenticated.panels-wells', {
            url: '/panels-wells',
            templateUrl: 'app/panels-wells/panels-wells.html'
        })
        .state('sbAdmin2.authenticated.tables', {
            url: '/tables',
            templateUrl: 'app/tables/tables.html'
        })
        .state('sbAdmin2.authenticated.typography', {
            url: '/typography',
            templateUrl: 'app/typography/typography.html'
        })
        .state('sbAdmin2.login', {
            url: '/login',
            templateUrl: 'app/login/login.html'
        });

    eehNavigationProvider.iconBaseClass('fa');

    eehNavigationProvider
        .menuItem('navbar.user', {
            text: 'me',
            iconClass: 'fa-user'
        })
        .menuItem('navbar.user.login', {
            text: 'User Profile',
            iconClass: 'fa-user',
            state: 'sbAdmin2.login'
        })
        .menuItem('navbar.user.settings', {
            text: 'Settings',
            iconClass: 'fa-gear',
            state: 'sbAdmin2.login'
        })
        .menuItem('navbar.user.divider', {
            isDivider: true
        })
        .menuItem('navbar.user.divider', {
            text: 'Logout',
            iconClass: 'fa-sign-out',
            state: 'sbAdmin2.login'
        });

    eehNavigationProvider
        .menuItem('sidebar.dashboard', {
            text: 'Dashboard',
            iconClass: 'fa-dashboard',
            state: 'sbAdmin2.authenticated.dashboard'
        })
        .menuItem('sidebar.charts', {
            text: 'Charts',
            iconClass: 'fa-bar-chart-o',
            isCollapsed: true
        })
        .menuItem('sidebar.charts.flot', {
            text: 'Flot',
            state: 'sbAdmin2.authenticated.flot'
        })
        .menuItem('sidebar.charts.morris', {
            text: 'Morris',
            state: 'sbAdmin2.authenticated.morris'
        })
        .menuItem('sidebar.tables', {
            text: 'Tables',
            iconClass: 'fa-table',
            state: 'sbAdmin2.authenticated.tables'
        })
        .menuItem('sidebar.forms', {
            text: 'Forms',
            iconClass: 'fa-edit',
            state: 'sbAdmin2.authenticated.forms'
        })
        .menuItem('sidebar.ui-elements', {
            text: 'UI Elements',
            iconClass: 'fa-wrench',
            isCollapsed: true
        })
        .menuItem('sidebar.ui-elements.panels-and-wells', {
            text: 'Panels and Wells',
            state: 'sbAdmin2.authenticated.panels-wells'
        })
        .menuItem('sidebar.ui-elements.buttons', {
            text: 'Buttons',
            state: 'sbAdmin2.authenticated.buttons'
        })
        .menuItem('sidebar.ui-elements.notifications', {
            text: 'Notifications',
            state: 'sbAdmin2.authenticated.notifications'
        })
        .menuItem('sidebar.ui-elements.typography', {
            text: 'Typography',
            state: 'sbAdmin2.authenticated.typography'
        })
        .menuItem('sidebar.ui-elements.grid', {
            text: 'Grid',
            state: 'sbAdmin2.authenticated.grid'
        })
        .menuItem('sidebar.multi-level-dropdown', {
            text: 'Multi-Level Dropdown',
            iconClass: 'fa-sitemap',
            isCollapsed: true
        })
        .menuItem('sidebar.multi-level-dropdown.second-level-item1', {
            text: 'Second Level Item',
            state: 'sbAdmin2.authenticated.blank'
        })
        .menuItem('sidebar.multi-level-dropdown.second-level-item2', {
            text: 'Second Level Item',
            state: 'sbAdmin2.authenticated.blank'
        })
        .menuItem('sidebar.multi-level-dropdown.third-level', {
            text: 'Third Level',
            isCollapsed: true
        })
        .menuItem('sidebar.multi-level-dropdown.third-level.item1', {
            text: 'Third Level Item',
            state: 'sbAdmin2.authenticated.blank'
        })
        .menuItem('sidebar.multi-level-dropdown.third-level.item2', {
            text: 'Third Level Item',
            state: 'sbAdmin2.authenticated.blank'
        })
        .menuItem('sidebar.multi-level-dropdown.third-level.item3', {
            text: 'Third Level Item',
            state: 'sbAdmin2.authenticated.blank'
        })
        .menuItem('sidebar.multi-level-dropdown.third-level.item4', {
            text: 'Third Level Item',
            state: 'sbAdmin2.authenticated.blank'
        })
        .menuItem('sidebar.sample-pages', {
            text: 'Sample Pages',
            iconClass: 'fa-files-o',
            isCollapsed: true
        })
        .menuItem('sidebar.sample-pages.blank-page', {
            text: 'Blank Page',
            state: 'sbAdmin2.authenticated.blank'
        })
        .menuItem('sidebar.sample-pages.login', {
            text: 'Login',
            state: 'sbAdmin2.login'
        });
}]);
