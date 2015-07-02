'use strict';

/**
 * @ngdoc function
 * @name angularHebrewGreekLatinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHebrewGreekLatinApp
 */
angular.module('angularHebrewGreekLatinApp')
    .controller('MainCtrl', function ($scope, $sanitize, $sce, $log) {
        $scope.tinymceOptions = {
            menubar: "false",
            toolbar: "newdocument | styleselect | undo redo | bold italic | alignleft aligncenter alignright alignjustify | subscript superscript | fullscreen",
            height: "300px",
            style_formats: [
                {
                    title: 'Görög (SPIonic)',
                    inline: 'span',
                    styles: {
                        'font-family': 'SPIonic'
                    }
                }
            ]
        };
        $scope.toTrusted = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
        $scope.emailNotification = function () {
            var link = "mailto:peter.horvath.2005@gmail.com?subject=Karakter megjelenítés nem működik&body=" + $scope.tinyText;
            window.location.href = link;
        };
    });