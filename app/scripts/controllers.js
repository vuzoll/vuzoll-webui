'use strict';

angular .module('vuzollWebuiApp')

        .controller('VkByVladController', ['$scope', 'reportFactory', 'randomRecordFactory', function($scope, reportFactory, randomRecordFactory) {
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
            $scope.randomRecord = randomRecordFactory.getRandomRecord().get({}).$promise.then(
                function(response) {
                    $scope.randomRecord = response;
                    $scope.showRandomRecord = true;
                },
                function(response) {
                    $scope.showRandomRecordMessage = "Помилка: " + response.status + " " + response.statusText;
                }
            );
        }])
;
