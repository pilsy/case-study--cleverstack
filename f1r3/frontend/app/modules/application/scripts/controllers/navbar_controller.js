define(['angular', 'application'], function (ng) {
    'use strict';

    ng.module('app.controllers')
        .controller('NavbarCtrl', [
    '$rootScope',
    '$scope',
    'Helpers',
    'CSTemplate',
    'CSSession',
    '$location',
    '$route',
    function ($rootScope, $scope, HelpersProvider, CSTemplateProvider, CSSessionProvider, $location, $route) {
                $scope.$watch(CSSessionProvider.getCurrentUser, function (user) {
                    $scope.currentUser = user || false;
                });

                var lang= $route.current.params.lang;
                var langPath = "/" + $route.current.params.lang;

                //navbar menu items
                //glyphs: http://getbootstrap.com/components/#glyphicons
                $scope.navbarItems = {

                    //these items appear in the navbar on the left
                    "left": [
                        {
                            "label": "Inicio",
                            "href": langPath + "",
                            "glyph": "home",
                            "requiresLogin": false,
                            "order": 1
                        },
                        {
                            "label": "Inicio",
                            "href": langPath + "",
                            "glyph": "home",
                            "requiresLogin": true,
                            "order": 1
                        },
                        {
                            "label": "Apuestas",
                            "href": langPath + "/bets",
                            "glyph": "bell",
                            "requiresLogin": false,
                            "order": 3
                        },
                        {
                            "label": "Apuestas",
                            "href": langPath + "/bets",
                            "glyph": "bell",
                            "requiresLogin": true,
                            "order": 3
                        },
                        {
                            "label": "Forum",
                            "href": langPath + "/forum",
                            "glyph": "comment",
                            "requiresLogin": false,
                            "order": 2
                        },
                        {
                            "label": "Forum",
                            "href": langPath + "/forum",
                            "glyph": "comment",
                            "requiresLogin": true,
                            "order": 2
                        },
                        {
                            "label": "Quiz",
                            "href": langPath + "/quiz",
                            "glyph": "edit",
                            "requiresLogin": false,
                            "order": 4
                        },
                        {
                            "label": "Quiz",
                            "href": langPath + "/quiz",
                            "glyph": "edit",
                            "requiresLogin": true,
                            "order": 4
                        },
                        {
                            "label": "Mi cuenta",
                            "href": langPath + "/profile",
                            "glyph": "user",
                            "requiresLogin": true,
                            "order": 9
                        },
                    ],

                    //these items appear on the navbar on the right
                    "right": [
                        {
                            "label": "Iniciar sesión",
                            "href": "",
                            "glyph": "log-in",
                            "requiresLogin": false,
                            "order": 1,
                            "class": "dropdown",
                            "subMenu": 
                                { 
                                    "requiresLogin": false,
                                    "templateUrl": "modules/application/views/partials/minilogin_" + lang + ".html" }
                        },
                        {
                            "label": "Cerrar sesión",
                            "href": lang+"/logout",
                            "glyph": "log-out",
                            "requiresLogin": true,
                            "order": 1
                        },
                        {
                            "label": "Registrarse",
                            "href": lang+"/register",
                            "glyph": "list-alt",
                            "requiresLogin": false,
                            "order": 2
                        }
                    ]
                };

                /* sub menu (dropdown) example

          {
            "label": "Menu Item 2",
            "href": "",
            "glyph": "list-alt",
            "requiresLogin": false,
            "order": 2,
            "subMenu": [
              {
                "label": "Sub Menu Item 1",
                "href": "",
                "glyph": "list-alt",
                "requiresLogin": false,
                "order": 1
              },
              {
                "label": "Sub Menu Item 2",
                "href": "",
                "glyph": "list-alt",
                "requiresLogin": false,
                "order": 2
              },
              {
                "label": "Sub Menu Item 3",
                "href": "",
                "glyph": "list-alt",
                "requiresLogin": false,
                "order": 3
              }
            ]
          }

      */

    }

  ]);
});