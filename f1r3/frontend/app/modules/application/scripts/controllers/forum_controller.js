define(['angular', 'application'], function (ng) {
  'use strict';

  ng.module('app.controllers')
  .controller('ForumController', [
    '$scope',
    'Helpers',
    'CSSession',
    'forumService',
    '$route',
    function ($scope, Helpers, CSSessionProvider, forumService, $route) {
      
      $scope.$watch(CSSessionProvider.getCurrentUser, function (user) {
                    $scope.currentUser = user || false;
                });

      $scope.lang = $route.current.params.lang;

      forumService.getAllChannels()
      	.then(function(data) {
      		$scope.channels = data;
      	});

    }

  ]);
});