angular.module('sbAdmin2').service('sidebar', function () {
    return {
        items: [
            {
                text: 'Dashboard',
                iconClass: 'fa-dashboard',
                state: 'sbAdmin2.authenticated.dashboard'
            },
            {
                text: 'Charts',
                iconClass: 'fa-bar-chart-o',
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
                children: [
                    { text: 'Second Level Item', state: 'sbAdmin2.authenticated.blank' },
                    { text: 'Second Level Item', state: 'sbAdmin2.authenticated.blank' },
                    {
                        text: 'Third Level',
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
        ]
    }
});

angular.module('sbAdmin2').directive('sidebar', function (sidebar) {
    return {
        restrict: 'AE',
        templateUrl: 'navigation/sidebar.html',
        link: function (scope, element) {
            scope.items = angular.copy(sidebar.items);
            scope.depth = 0;
            scope.incrementDepth = function () {
                scope.depth += 1;
            };
            scope.getDepthOf = function (item) {
                scope.depth -= 1;
            };
        }
    }
});
