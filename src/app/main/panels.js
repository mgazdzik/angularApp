'use strict';

(function () {
    var app = angular.module('panels', ['services']);

    app.directive('drawPanels', ['panelsFactory', 'menuIndex', function (panelsFactory, menuIndex) {
        return {
            restrict: 'E',
            templateUrl: 'app/main/panels.html',
            controller: function () {
                this.menuIndex = menuIndex;
                this.panels = panelsFactory;
            },
            controllerAs: "panelsCtrl"
        };

    }]);

    app.factory("panelsFactory", function () {
        return [
            {
                content: 'zawartosc 1...'
            },
            {
                content: 'zawartosc 2...'
            },
            {
                content: 'zawartosc 3...'
            }
        ]
    });
})();