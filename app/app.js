(function () {
    var app = angular.module('hikingApp', []);

    app.directive('tripDuration', function () {
        return {
            restrict: 'E',
            templateUrl: 'trip-duration.html',
            scope: {
                trip: '='
            },
            controller: function ($scope) {
                timeSpan = new TimeSpan($scope.trip.end - $scope.trip.start);
                $scope.hours = timeSpan.hours;
                $scope.minutes = timeSpan.minutes;

            },
        };
    });

    app.controller('OverviewController', function ($scope) {

        this.trips = [{
                name: 'Nockstein Schlucht',
                start: Date.parse('2014-05-21 11:00'),
                goal: Date.parse('2014-05-21 13:00'),
                end: Date.parse('2014-05-21 15:00'),
            },
            {
                name: 'Drachenwand',
                start: Date.parse('2014-05-24 13:00'),
                goal: Date.parse('2014-05-24 15:21'),
                end: Date.parse('2014-05-24 16:56')
        }];

        $scope.predicate = 'start';
        $scope.reverse = true;

        this.sort = function (predicate) {
            if ($scope.predicate == predicate) {
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.predicate = predicate;
            }
        };

    });
})();