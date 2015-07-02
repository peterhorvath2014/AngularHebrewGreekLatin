'use strict';

/**
 * @ngdoc function
 * @name angularHebrewGreekLatinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHebrewGreekLatinApp
 */
angular.module('angularHebrewGreekLatinApp')
    .controller('MainCtrl', function($scope, $sanitize, $sce, $log) {
        $scope.tinymceOptions = {
            menubar: "false",
            toolbar: "newdocument | styleselect | undo redo | bold italic | alignleft aligncenter alignright alignjustify | subscript superscript | removeformat | fullscreen",
            height: "300px",
            style_formats: [{
                title: 'Ελληνική γραμματοσειρά',
                block: 'p',
                styles: {
                    'font-family': 'SPIonic',
                }
            }, {
                title: 'סט גופן עברית',
                block: 'p',
                styles: {
                    'font-family': 'Hebrew',
                    'direction': 'rtl',
                    'text-align': 'right'
                }
            }]
        };
        $scope.toTrusted = function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
        $scope.emailNotification = function() {
            var link = "mailto:peter.horvath.2005@gmail.com?subject=Karakter megjelenítés nem működik&body=" + $scope.tinyText;
            window.location.href = link;
        };
    });