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
                            templateUrl : 'views/home.html',
                            controller  : 'IndexController'
                        },
                        'footer': {
                            templateUrl : 'views/footer.html',
                        }
                    }
                })

                .state('app.explore', {
                    url: 'explore',
                    views: {
                        'content@': {
                            templateUrl : 'views/explore.html',
                            controller  : 'ExploreController'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
        });
