'use strict';

angular.module('sdwn')

  .factory('NetworkService', function ($resource) {
    return $resource('/networks/:id');
  })

;
