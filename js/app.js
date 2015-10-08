'use strict';

var myApp = angular.module('myApp', ['ui.router', 'ngStorage'])

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/mainpage');

    $stateProvider
        .state('main', {
        url: '/mainpage',
        controller: 'main-page-controller',
        templateUrl: 'views/main-page.html'

        })

        .state('page2', {
        url: '/page2',
        controller: 'page-2-controller',
        templateUrl: 'views/page-2.html'
        
        })

        .state('page3', {
        url: '/page3',
        controller: 'page-3-controller',
        templateUrl: 'views/page-3.html'
        
        })

});


