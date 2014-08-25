angular.module('sbAdmin2', [
    'ui.bootstrap',
    'ui.router',
    'navigation'
])
.config(['$stateProvider', '$urlRouterProvider', 'sidebarProvider',
function ($stateProvider, $urlRouterProvider, sidebarProvider) {
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

    sidebarProvider.items = [
        {
            text: 'Dashboard',
            iconClass: 'fa-dashboard',
            state: 'sbAdmin2.authenticated.dashboard'
        },
        {
            text: 'Charts',
            iconClass: 'fa-bar-chart-o',
            isCollapsed: true,
            children: [
                {
                    text: 'Flot',
                    state: 'sbAdmin2.authenticated.flot'
                },
                {
                    text: 'Morris',
                    state: 'sbAdmin2.authenticated.morris'
                }
            ]
        },
        {
            text: 'Tables',
            iconClass: 'fa-table',
            state: 'sbAdmin2.authenticated.tables'
        },
        {
            text: 'Forms',
            iconClass: 'fa-edit',
            state: 'sbAdmin2.authenticated.forms'
        },
        {
            text: 'UI Elements',
            iconClass: 'fa-wrench',
            isCollapsed: true,
            children: [
                {
                    text: 'Panels and Wells',
                    state: 'sbAdmin2.authenticated.panels-wells'
                },
                {
                    text: 'Buttons',
                    state: 'sbAdmin2.authenticated.buttons'
                },
                {
                    text: 'Notifications',
                    state: 'sbAdmin2.authenticated.notifications'
                },
                {
                    text: 'Typography',
                    state: 'sbAdmin2.authenticated.typography'
                },
                {
                    text: 'Grid',
                    state: 'sbAdmin2.authenticated.grid'
                }
            ]
        },
        {
            text: 'Multi-Level Dropdown',
            iconClass: 'fa-sitemap',
            isCollapsed: true,
            children: [
                { text: 'Second Level Item', state: 'sbAdmin2.authenticated.blank' },
                { text: 'Second Level Item', state: 'sbAdmin2.authenticated.blank' },
                {
                    text: 'Third Level',
                    isCollapsed: true,
                    children: [
                        { text: 'Third Level Item', state: 'sbAdmin2.authenticated.blank' },
                        { text: 'Third Level Item', state: 'sbAdmin2.authenticated.blank' },
                        { text: 'Third Level Item', state: 'sbAdmin2.authenticated.blank' },
                        { text: 'Third Level Item', state: 'sbAdmin2.authenticated.blank' }
                    ]
                }
            ]
        },
        {
            text: 'Sample Pages',
            iconClass: 'fa-files-o',
            isCollapsed: true,
            children: [
                {
                    text: 'Blank Page',
                    state: 'sbAdmin2.authenticated.blank'
                },
                {
                    text: 'Login',
                    state: 'sbAdmin2.login'
                }
            ]
        }
    ];
}]);
