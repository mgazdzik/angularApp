'use strict';

(function () {
    var app = angular.module("mojeMenu", ['services']);

    app.directive("rysujMenu", ["menuItemsFactory", 'menuIndex', function (menuItemsFactory, menuIndex) {
        return {
            restrict: "E",
            templateUrl: "app/main/menu.html",
            controller: function () {
                this.title = "Main menu";
                this.menuIndex = menuIndex;
                this.items = menuItemsFactory;
            },
            controllerAs: "menuCtrl"
        };
    }]);

    app.factory('menuItemsFactory', function () {
        var items = [
            {
                name: "Tab 1"
            },
            {
                name: "Tab 2"
            },
            {
                name: "Tab 3"
            }
        ];
        return items;
    });
})();