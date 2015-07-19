'use strict';

angular.module('angularHebrewGreekLatinApp')
    .factory('MainFactory', function MainFactory($http, $q, $log) {
        return {
            getSavedTexts: function() {
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/iaa/collections/text',
                    method: 'GET',
                    params: {
                        'apiKey': 'rLXW_SYqupDY0XvVv50ge8CVYUgrsMRZ'
                    }
                }).then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            $log.info(response);
                            return response.data;
                        }
                        else {
                            $log.error('Error: ' + JSON.stringify(response));
                            return $q.reject(response.data);
                        }
                    },
                    function(response) {
                        $log.error('Error: ' + JSON.stringify(response));
                        return $q.reject(response.data);
                    });
            },
            insertNewText: function(tester) {
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/iaa/collections/text',
                    method: 'POST',
                    data: {
                        tester: tester
                    },
                    params: {
                        'apiKey': 'rLXW_SYqupDY0XvVv50ge8CVYUgrsMRZ'
                    }
                }).then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            $log.info(response);
                            return response.data;
                        }
                        else {
                            $log.error('Error: ' + JSON.stringify(response));
                            return $q.reject(response.data);
                        }
                    },
                    function(response) {
                        $log.error('Error: ' + JSON.stringify(response));
                        return $q.reject(response.data);
                    });
            },
            deleteText: function(id) {
                $log.debug(id);
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/iaa/collections/text/' + id.$oid,
                    method: 'DELETE',
                    params: {
                        'apiKey': 'rLXW_SYqupDY0XvVv50ge8CVYUgrsMRZ'
                    }
                }).then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            $log.info(response);
                            return response.data;
                        }
                        else {
                            $log.error('Error: ' + JSON.stringify(response));
                            return $q.reject(response.data);
                        }
                    },
                    function(response) {
                        $log.error('Error: ' + JSON.stringify(response));
                        return $q.reject(response.data);
                    });
            },
            updateText: function(tester, id) {
                $log.debug(tester._id);
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/iaa/collections/text/' + id.$oid,
                    method: 'PUT',
                    data: {
                        tester: tester
                    },
                    params: {
                        'apiKey': 'rLXW_SYqupDY0XvVv50ge8CVYUgrsMRZ'
                    }
                }).then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            $log.info(response);
                            return response.data;
                        }
                        else {
                            $log.error('Error: ' + JSON.stringify(response));
                            return $q.reject(response.data);
                        }
                    },
                    function(response) {
                        $log.error('Error: ' + JSON.stringify(response));
                        return $q.reject(response.data);
                    });
            }
        };
    });