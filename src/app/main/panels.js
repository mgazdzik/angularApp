'use strict';

(function () {
    var app = angular.module('panels', ['services']);

    app.directive('drawPanels', ['panelContentFactory', 'menuIndex',
        function (panelContentFactory, menuIndex) {
        return {
            restrict: 'E',
            templateUrl: 'app/main/panels.html',
            controller: function () {
                this.menuIndex = menuIndex;
                this.panel = panelContentFactory;
            },
            controllerAs: "panelsCtrl"
        };
    }]);

    app.factory("panelContentFactory", ['$http', 'contentImporter',
        function ($http, contentImporter) {
        return contentImporter.getContent();
    }]);
})();