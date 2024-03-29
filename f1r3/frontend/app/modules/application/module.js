define(['angular'], function (ng) {
  'use strict';

  ng.module('app.providers', []);
  ng.module('app.controllers', []);
  ng.module('app.services', []);
  ng.module('app.directives', []);

  var module = ng.module('app', [
    'cs_account',
    'cs_common',
    'cs_session',
    'users',
    'app.providers',
    'app.controllers',
    'app.services',
    'app.directives'
  ]);

  module.config([
    '$routeProvider',
    '$locationProvider',
    'CSTemplateProvider',
    'CSHttpOptionsProvider',
    'CSSessionProvider',
    'HelpersProvider',
    function ($routeProvider, $locationProvider, CSTemplateProvider, CSHttpOptionsProvider, CSSessionProvider, HelpersProvider) {

      HelpersProvider.extend('CSCommonHelpers');

      CSTemplateProvider.setPath('/modules/application/views');

      // CSHttpOptionsProvider.setDomain('/api');

      CSSessionProvider.setSessionService('CSSessionService');

      $locationProvider.html5Mode(true);

    //   $routeProvider
    //     .when('/', {
    //       templateUrl: CSTemplateProvider.view('home'),
    //       controller: 'HomeController',
    //       public: true
    //     });

    // }
    $routeProvider
        .when('/:lang', {
          templateUrl: function(params) { 
            return CSTemplateProvider.view('home_' + validateLanguage(params.lang));},
          redirectTo: function(params, path, search) {
            var lang = validateLanguage(params.lang);

            if(lang != params.lang){
              return '/' + lang;
            }

            return path;
          },
          controller: 'HomeController',
          public: true
        })
        .when('/:lang/forum', {
          templateUrl: function(params) {
            return CSTemplateProvider.view('forum/forum_' + validateLanguage(params.lang));},
          redirectTo: function(params, path, search) {
            var lang = validateLanguage(params.lang);

            if(lang != params.lang){
              return '/' + lang;
            }

            return path;
          },
          controller: 'ForumController',
          public: true
        })
        .otherwise({redirectTo: '/es'});

     }

  ]);

  var validLanguages = [
    "es",
    "en"
  ]

  function validateLanguage(lang){
    if(validLanguages.indexOf(lang) >= 0){
      return lang;
    }

    return validLanguages[0];
  }


  return module;

});
