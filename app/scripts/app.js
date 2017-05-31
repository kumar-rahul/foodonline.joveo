'use strict';

/**
 * @ngdoc overview
 * @name joveoApp
 * @description
 * # joveoApp
 *
 * Main module of the application.
 */

var com = com || {};
com.joveo = com.joveo || {};
// com.joveo.config = com.joveo.config || {};
// com.joveo.constant = com.joveo.constant || {};
com.joveo.appname = 'joveoApp';
//com.joveo.config.logging = true;

com.joveo.app = angular.module(com.joveo.appname, ['ui.router']);


com.joveo.app.config(["$stateProvider", "$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
	console.log("app: config");

    $stateProvider
        .state('order', {
            url: '/order',
            templateUrl: 'views/order.html',
			controller: 'order'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'home'
        })
        .state('confirm', {
            url: '/confirm',
            templateUrl: 'views/confirm.html',
			controller: 'confirm'
        });
    $urlRouterProvider.otherwise('order');
    
}]);