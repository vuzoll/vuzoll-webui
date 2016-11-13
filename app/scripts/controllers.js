'use strict';

angular .module('vuzollWebuiApp')

        .controller('IndexController', ['$scope', function($scope) {
        }])

        .controller('ExploreController', ['$scope', 'exploreFactory', function($scope, exploreFactory) {
            $scope.showReport = false;
            $scope.message = "Loading ...";
            $scope.report = exploreFactory.getReport().get({}).$promise.then(
                function(response) {
                    $scope.report = response;
                    $scope.showReport = true;
                },
                function(response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
        }])
;
