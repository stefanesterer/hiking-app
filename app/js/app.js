(function () {
    var app = angular.module('hikingApp', ['ngRoute', 'hikingApp.controllers']);

    app.config(['$routeProvider',
        function ($routeProvider)
        {
            $routeProvider.
            when('/overview', {
                templateUrl: 'partials/trip-overview.html',
                controller: 'OverviewController'
            }).
            when('/addTrip', {
                templateUrl: 'partials/trip-adding.html'
                /*,
controller: 'PhoneDetailCtrl'*/
            }).
            otherwise({
                redirectTo: '/overview'
            });
  }]);

    app.directive('tripDuration', function () {
        return {
            restrict: 'E',
            templateUrl: 'trip-duration.html',
            scope: {
                trip: '='
            },
            controller: function ($scope) {
                var diff = moment.duration(moment($scope.trip.end) - moment($scope.trip.start));
                $scope.hours = diff.hours();
                $scope.minutes = diff.minutes();

            },
        };
    });

    app.filter('moment', function () {
        return function (dateString, format) {
            return moment(dateString).lang('de').format(format);
        };
    });


})();