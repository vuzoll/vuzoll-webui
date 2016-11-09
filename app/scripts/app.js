'use strict';

angular .module('vuzollWebuiApp', ['ui.router', 'ngResource'])
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl : 'views/header.html',
                        },
                        'content': {
                            templateUrl : 'views/main.html'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
        });
