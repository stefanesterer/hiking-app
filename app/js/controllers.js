'use strict';

angular.module('hikingApp.controllers', [])
    .controller('OverviewController', function ($scope) {

        $scope.trips = [{
                name: 'Nockstein Schlucht',
                start: moment('2014-05-21 11:00'),
                goal: moment('2014-05-21 13:00'),
                end: moment('2014-05-21 15:00'),
            },
            {
                name: 'Drachenwand',
                start: moment('2014-05-24 13:00'),
                goal: moment('2014-05-24 15:21'),
                end: moment('2014-05-24 16:56')
        }];

        $scope.predicate = 'start';
        $scope.reverse = true;

        $scope.sort = function (predicate) {
            if ($scope.predicate == predicate) {
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.predicate = predicate;
            }
        };

        $scope.myTripFilter = function (trip) {

            if ($scope.searchText == undefined) {
                return true;
            }
            if (trip.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }

            var startDateString = moment(new Date(trip.start)).lang('de').format('MMM YYYY');
            if (startDateString.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }

            return false;
        };

    });