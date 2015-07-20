'use strict';

/**
 * @ngdoc function
 * @name angularHebrewGreekLatinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHebrewGreekLatinApp
 */
angular.module('angularHebrewGreekLatinApp')
    .controller('AuthCtrl', function($scope, $sanitize, $sce, $log, user) {
        user.init({ appId: '55acf70150845' });
        
    });