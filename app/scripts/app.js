'use strict';

/**
 * @ngdoc overview
 * @name angularHebrewGreekLatinApp
 * @description
 * # angularHebrewGreekLatinApp
 *
 * Main module of the application.
 */
angular
  .module('angularHebrewGreekLatinApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.tinymce',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
