(function () {
    var app = angular.module('hikingApp', []);

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

        this.getDuration = function (start, end) {
            console.log(start + ' ' +
                end);
            return new TimeSpan(end - start);
        };

    });
})();