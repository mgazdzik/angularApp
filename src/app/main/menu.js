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
                name: "abc",
                href: "http://google.com"
            },
            {
                name: "bcde",
                href: "http://google.com"
            },
            {
                name: "cefalo",
                href: "http://google.com"
            }
        ];
        return items;
    });
})();