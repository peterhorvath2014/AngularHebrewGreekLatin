'use strict';

/**
 * @ngdoc function
 * @name angularHebrewGreekLatinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHebrewGreekLatinApp
 */
angular.module('angularHebrewGreekLatinApp')
    .controller('MainCtrl', function($scope, $sanitize, $sce, $log, MainFactory) {
        $scope.tinymceOptions = {
            menubar: 'false',
            toolbar: 'styleselect | undo redo | bold italic | alignleft aligncenter alignright alignjustify | subscript superscript | removeformat | fullscreen',
            height: '300px',
            style_formats: [{
                title: 'Times New Roman',
                block: 'p',
                styles: {
                    'font-family': 'Times New Roman',
                }
            }, {
                title: 'Ελληνική γραμματοσειρά',
                block: 'p',
                styles: {
                    'font-family': 'SPIonic',
                }
            }, {
                title: '(SBL Hbrw) - סט גופן עברית',
                block: 'p',
                styles: {
                    'font-family': 'Hebrew',
                    'direction': 'rtl',
                    'text-align': 'right'
                }
            }, {
                title: 'Geez',
                block: 'p',
                styles: {
                    'font-family': 'Geez',
                }
            }, {
                title: 'Coptic',
                block: 'p',
                styles: {
                    'font-family': 'Coptic',
                }
            }, {
                title: 'Samarit',
                block: 'p',
                styles: {
                    'font-family': 'Samarit',
                    'direction': 'rtl',
                    'text-align': 'right'
                }
            }]
        };
        $scope.toTrusted = function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
        $scope.emailNotification = function() {
            var link = 'mailto:peter.horvath.2005@gmail.com?subject=Karakter megjelenítés nem működik&body=' + $scope.tinyText;
            window.location.href = link;
        };
        function refreshSavedTexts() {
            var promise = MainFactory.getSavedTexts();
            promise.then(function(data) {
                $log.debug(data);
                $scope.savedTexts = data;
            }, function(error) {

            });
        }
        refreshSavedTexts();
        function resetForm() {
            $scope.tinyText = '';
            $scope.title = '';
            $scope.entity_id = '';
            $scope.id = undefined;
        }

        $scope.loadTextIntoWorkingArea = function(text) {
            $scope.tinyText = text.msg;
            $scope.title = text.title;
            $scope.entity_id = text.entity_id;
            $scope.id = text._id;
        };
        $scope.removeTextFromDb = function(id) {
            var promise = MainFactory.deleteText(id);
            promise.then(function(data) {
                refreshSavedTexts();
            }, function(error) {

            });
        };
        $scope.saveText = function(text, good) {
            var promise;
            if ($scope.id) {
                promise = MainFactory.updateText(text, good, $scope.title, $scope.entity_id, $scope.id);
            } else {
                promise = MainFactory.insertNewText(text, good, $scope.title, $scope.entity_id);
            }
            promise.then(function(data) {
                resetForm();
                refreshSavedTexts();
            }, function(error) {

            });
        };
        
        $scope.resetForm = function() {
            resetForm();
        };

    });