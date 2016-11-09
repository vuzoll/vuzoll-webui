'use strict';

angular .module('vuzollWebuiApp')

        .constant("baseURL","http://localhost:3000/")

        .service('exploreFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
            this.getReport = function() {
                return $resource(baseURL + "explore", null,  { 'update': {method:'PUT'} });
            };
        }])
;
