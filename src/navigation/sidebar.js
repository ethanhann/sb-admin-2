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

//<li>
//    <a href="#"><i class="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
//    <ul class="nav nav-second-level">
//        <li>
//            <a href="#">Second Level Item</a>
//        </li>
//        <li>
//            <a href="#">Second Level Item</a>
//        </li>
//        <li>
//            <a href="#">Third Level <span class="fa arrow"></span></a>
//            <ul class="nav nav-third-level">
//                <li>
//                    <a href="#">Third Level Item</a>
//                </li>
//                <li>
//                    <a href="#">Third Level Item</a>
//                </li>
//                <li>
//                    <a href="#">Third Level Item</a>
//                </li>
//                <li>
//                    <a href="#">Third Level Item</a>
//                </li>
//            </ul>
//            <!-- /.nav-third-level -->
//        </li>
//    </ul>
//    <!-- /.nav-second-level -->
//</li>

angular.module('sbAdmin2').directive('sidebar', function (sidebar) {
    return {
        restrict: 'AE',
        templateUrl: 'navigation/sidebar.html',
        link: function (scope, element) {
            scope.items = angular.copy(sidebar.items);
        }
    }
});
