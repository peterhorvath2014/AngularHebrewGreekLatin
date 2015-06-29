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
    'ui.tinymce'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
