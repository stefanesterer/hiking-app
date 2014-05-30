'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('hikingApp'));


    it('should initialize correctly', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        expect($scope.predicate).toEqual("start");
        expect($scope.reverse).toBe(true);
    }));

    it('should change predicate when different predicate', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.sort("test");
        expect($scope.predicate).toEqual("test");
        expect($scope.reverse).toBe(true);
    }));

    it('should change reverse when same predicate', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.sort("start");
        expect($scope.predicate).toEqual("start");
        expect($scope.reverse).toBe(false);
    }));

    it('should filter nothing when searchText is undefined', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.searchText = undefined;
        expect($scope.myTripFilter(null)).toBe(true);
    }));

    it('should filter nothing when searchText contains name substring', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.searchText = "Berg";
        var trip = {
            name: "Untersberg"
        };
        expect($scope.myTripFilter(trip)).toBe(true);
    }));

    it('should filter out when searchText contains not name substring and no date', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.searchText = "Berg";
        var trip = {
            name: "Mount Everest",
            start: Date.parse('2014-05-24 13:00')
        };
        expect($scope.myTripFilter(trip)).toBe(false);
    }));

    it('should filter nothing when searchText contains not name substring and date is matching year', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.searchText = "2014";
        var trip = {
            name: "Mount Everest",
            start: Date.parse('2014-05-24 13:00', 'yyyy-MM-dd hh:mm')
        };
        expect($scope.myTripFilter(trip)).toBe(true);
    }));

    it('should filter out when searchText contains not name substring and date is not matching year', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.searchText = "2015";
        var trip = {
            name: "Mount Everest",
            start: Date.parse('2014-05-24 13:00', 'yyyy-MM-dd hh:mm')
        };
        expect($scope.myTripFilter(trip)).toBe(false);
    }));

    it('should filter out when searchText contains not name substring and date is not matching month', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.searchText = "Juni";
        var trip = {
            name: "Mount Everest",
            start: Date.parse('2014-05-24 13:00', 'yyyy-MM-dd hh:mm')
        };
        expect($scope.myTripFilter(trip)).toBe(false);
    }));

    it('should filter nothing when searchText contains not name substring and date is matching month', inject(function ($controller) {
        //spec body
        var $scope = {};
        var overviewCtrl = $controller('OverviewController', {
            $scope: $scope
        });
        $scope.searchText = "Mai";
        var trip = {
            name: "Mount Everest",
            start: Date.parse('2014-05-24 13:00', 'yyyy-MM-dd hh:mm')
        };
        expect($scope.myTripFilter(trip)).toBe(true);
    }));

});