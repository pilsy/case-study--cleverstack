define(['angular', 'underscore', '../../module'], function (ng, _) {
  'use strict';

  ng.module('app.services')
  .service('forumService', [
    '$http',
    '$q',
    '$rootScope',
    function ($http, $q, $rootScope) {

      return {

        getAllChannels: function (credentials) {
          var def = $q.defer();

          $rootScope.$broadcast('appService:beginRequest');

          return $http.post('/forum/channels')
            .then(function(response){

              $rootScope.$broadcast('appService:endRequest');
              return response.data;
            });
        }

        // logout: function () {
        //   return $http.get('/user/logout');
        // },

        // getCurrentUser: function () {
        //   var def = $q.defer();

        //   $http.get('/user/current')
        //     .then(function (response) {
        //       if(_(response.data).has('id')) {
        //         def.resolve(response.data);
        //       } else {
        //         def.reject();
        //       }
        //     }, function (err) {
        //       def.reject(err);
        //     });

        //   return def.promise;
        // }

      };

    }

  ]);

});
