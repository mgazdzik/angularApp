'use strict';

(function () {
    var app = angular.module('services', []);
    app.service('menuIndex', [menuItemIndex]);
    app.service('contentImporter', ['menuIndex', contentImporter]);

    function menuItemIndex() {

        this.currentIndex = 0;

        this.setActive = function (index) {
            this.currentIndex = index;
        };

        this.isActive = function (index) {
            return this.currentIndex === index;
        };

    };

    function contentImporter(menuIndex) {
        this.getContent = function () {
            return {
                content: "qwerty" + ' ' + menuIndex.currentIndex,
            };
        };
    }

})();
