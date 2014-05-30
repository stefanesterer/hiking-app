(function () {
    var app = angular.module('hikingApp', []);

    app.directive('tripDuration', function () {
        return {
            restrict: 'E',
            templateUrl: 'trip-duration.html',
            scope: {
                duration: '='
            }
        };
    });

    app.controller('OverviewController', function () {

        this.trips = [{
                name: 'Nockstein Schlucht',
                date: Date.parse('2014-05-21'),
                start: undefined,
                goal: undefined,
                end: undefined
        },
            {
                name: 'Drachenwand',
                date: Date.parse('2014-05-24'),
                start: Date.parse('2014-05-24 13:00'),
                goal: Date.parse('2014-05-24 15:21'),
                end: Date.parse('2014-05-24 16:56')
        }];

        this.duration = function (trip) {
            alert(trip);
            timeSpan = new TimeSpan(Date.parse(trip.end) - Date.parse(trip.start));
            alert(timeSpan);
            return {
                hours: timeSpan.hours,
                minutes: timeSpan.minutes
            };
        };

    });
})();