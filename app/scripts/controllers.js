'use strict';

angular .module('vuzollWebuiApp')

        .controller('VkByVladExploreController', ['$scope', 'reportFactory', 'recordFactory', function($scope, reportFactory, recordFactory) {
            $scope.showReport = false;
            $scope.showReportMessage = "Завантаження...";
            $scope.report = reportFactory.getReport().get({}).$promise.then(
                function(response) {
                    $scope.report = response;
                    $scope.showReport = true;
                },
                function(response) {
                    $scope.showReportMessage = "Помилка: " + response.status + " " + response.statusText;
                }
            );

            $scope.showRandomRecord = false;
            $scope.showRandomRecordMessage = "Завантаження...";
            $scope.randomRecord = recordFactory.getRandomRecord().get({}).$promise.then(
                function(response) {
                    $scope.randomRecord = response;
                    $scope.showRandomRecord = true;
                },
                function(response) {
                    $scope.showRandomRecordMessage = "Помилка: " + response.status + " " + response.statusText;
                }
            );
        }])

        .controller('VkByVladRecordController', ['$scope', '$stateParams', 'recordFactory', function($scope, $stateParams, recordFactory) {
            $scope.showRecord = false;
            $scope.showRecordMessage = "Завантаження...";
            $scope.record = recordFactory.getRecord().get({id:parseInt($stateParams.id,10)}).$promise.then(
                function(response) {
                    $scope.record = response;
                    $scope.showRecord = true;
                },
                function(response) {
                    $scope.showRecordMessage = "Помилка: " + response.status + " " + response.statusText;
                }
            );
        }])
;
