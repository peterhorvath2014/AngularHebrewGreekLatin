'use strict';

/**
 * @ngdoc function
 * @name angularHebrewGreekLatinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHebrewGreekLatinApp
 */
angular.module('angularHebrewGreekLatinApp')
    .controller('MainCtrl', function($scope, $sanitize, $sce, $log, MainFactory, user) {
        user.init({ appId: '55acf70150845' });
        $scope.tinymceOptions = {
            menubar: 'false',
            toolbar: 'styleselect | undo redo | bold italic | alignleft aligncenter alignright alignjustify | subscript superscript | removeformat | fullscreen',
            height: '300px',
            style_formats: [{
                title: 'Ελληνική γραμματοσειρά',
                block: 'p',
                styles: {
                    'font-family': 'SPIonic',
                }
            }, {
                title: '**Ελληνική γραμματοσειρά**',
                inline: 'span',
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
                title: '**(SBL Hbrw) - סט גופן עברית**',
                inline: 'span',
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
                title: '**Geez**',
                inline: 'span',
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
                title: '??Coptic??',
                inline: 'span',
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
            }, {
                title: '**Samarit**',
                inline: 'span',
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
        $scope.defaultTester = $scope.tester;

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
            $scope.tester = angular.copy($scope.defaultTester);
            $scope._id = undefined;
        }

        $scope.loadTextIntoWorkingArea = function(text) {
            $scope.tester = angular.copy(text.tester);
            $scope._id = angular.copy(text._id);
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
            if ($scope._id) {
                promise = MainFactory.updateText($scope.tester, $scope._id);
            }
            else {
                promise = MainFactory.insertNewText($scope.tester);
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