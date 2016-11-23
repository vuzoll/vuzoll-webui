'use strict';

angular .module('vuzollWebuiApp')

        .controller('VkByVladController', ['$scope', 'exploreFactory', function($scope, exploreFactory) {
            $scope.showReport = false;
            $scope.message = "Завантаження...";
            $scope.report = exploreFactory.getReport().get({}).$promise.then(
                function(response) {
                    $scope.report = response;
                    $scope.showReport = true;
                },
                function(response) {
                    $scope.message = "Помилка: " + response.status + " " + response.statusText;
                }
            );
        }])
;
