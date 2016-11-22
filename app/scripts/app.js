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
                            templateUrl : 'views/home.html'
                        },
                        'footer': {
                            templateUrl : 'views/footer.html',
                        }
                    }
                })

                .state('app.datasets', {
                    url: 'datasets',
                    views: {
                        'content@': {
                            templateUrl : 'views/datasets.html'
                        }
                    }
                })

                .state('app.vk_vlad', {
                    url: 'vk_vlad',
                    views: {
                        'content@': {
                            templateUrl : 'views/vk_vlad.html',
                            controller  : 'VkByVladController'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
        });
