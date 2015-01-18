'use strict';

angular.module('zosia', ['ngResource', 'ngRoute', 'mojeMenu', 'panels', 'services'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'indexController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
