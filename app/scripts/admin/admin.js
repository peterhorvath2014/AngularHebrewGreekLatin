'use strict';

/**
 * @ngdoc function
 * @name angularHebrewGreekLatinApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the angularHebrewGreekLatinApp
 */
angular.module('angularHebrewGreekLatinApp')
    .controller('AdminCtrl', function($scope, $sanitize, $sce, $log, user) {
        user.init({ appId: '55acf70150845' });
    });