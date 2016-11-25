'use strict';

angular .module('vuzollWebuiApp')

        .constant("baseURL","http://138.68.145.93:5050/")

        .service('reportFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
            this.getReport = function() {
                return $resource(baseURL + 'datasets/vk-by-vlad/explore', null,  { });
            };
        }])

        .service('randomRecordFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
            this.getReport = function() {
                return $resource(baseURL + 'datasets/vk-by-vlad/record/random', null,  { });
            };
        }])
;
