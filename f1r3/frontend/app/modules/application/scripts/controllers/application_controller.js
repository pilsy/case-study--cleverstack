define(['angular', 'application'], function (ng) {
  'use strict';

  ng.module('app.controllers')
  .controller('AppCtrl', [
    '$scope',
    'Helpers',
    'CSTemplate',
    'CSSession',
    function ($scope, HelpersProvider, CSTemplateProvider, CSSessionProvider) {

      $scope.requestCounter = 0;

      $scope.helpers = HelpersProvider;
      $scope.tpl = CSTemplateProvider;

      $scope.$watch(CSSessionProvider.getCurrentUser, function (user) {
        $scope.currentUser = user || false;
      });

      $scope.$on('appService:beginRequest', function () {
            $scope.requestCounter++;
            console.log('appService:beginRequest #' +$scope.requestCounter);
          });

      $scope.$on('appService:endRequest', function () {
            $scope.requestCounter--;
            console.log('appService:endRequest #' +$scope.requestCounter);
          });
    }

  ]);
});
