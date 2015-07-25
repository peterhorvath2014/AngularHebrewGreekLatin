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
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.tinymce',
    'angular-loading-bar',
    'UserApp',
    'ngCordova'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl',
        data: {
          public: true
        }
      })
      .state('login', {
        url: "/login",
        templateUrl: 'scripts/auth/login.html',
        controller: 'AuthCtrl',
        data: {
          login: true
        }
      })
      .state('signup', {
        url: "/signup",
        templateUrl: 'scripts/auth/signup.html',
        controller: 'AuthCtrl',
        data: {
          login: true
        }
      })
      .state('admin', {
        url: "/admin",
        templateUrl: 'scripts/admin/admin.html',
        controller: 'AdminCtrl',
        data: {
          hasPermission: 'admin'
        }
      })
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }]);
