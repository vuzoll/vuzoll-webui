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

                .state('app.vk_vlad_explore', {
                    url: 'vk_vlad_explore',
                    views: {
                        'content@': {
                            templateUrl : 'views/vk_vlad_explore.html',
                            controller  : 'VkByVladExploreController'
                        }
                    }
                })

                .state('app.vk_vlad_record', {
                    url: 'vk_vlad_record/:id',
                    views: {
                        'content@': {
                            templateUrl : 'views/vk_vlad_record.html',
                            controller  : 'VkByVladRecordController'
                       }
                    }
                });

            $urlRouterProvider.otherwise('/');
        });
