angular.module('navigation', [])
.provider('sidebar', function () {
    var self = this;
    self.items = [];
    self.$get = function () {
        return {
            items: self.items
        };
    };
})
.directive('sidebar', function (sidebar) {
    return {
        restrict: 'AE',
        templateUrl: 'navigation/sidebar.html',
        link: function (scope) {
            scope.items = angular.copy(sidebar.items);
        }
    }
});
