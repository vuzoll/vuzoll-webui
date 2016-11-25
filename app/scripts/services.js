'use strict';

angular .module('vuzollWebuiApp')

        .constant("baseURL","http://138.68.145.93:5050/")

        .service('exploreFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
            this.getReport = function() {
                return $resource(baseURL + 'datasets/vk-by-vlad/explore', null,  { 'update': {method:'PUT'} });
            };
        }])
;
