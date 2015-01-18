'use strict';

(function () {
    var app = angular.module('services', []);
    app.service('menuIndex', [menuItemIndex]);

    function menuItemIndex() {
        this.currentIndex = 0;

        this.setActive = function (index) {
            this.currentIndex = index;
        };

        this.isActive = function (index) {
            return this.currentIndex === index;
        };

    };


})();
