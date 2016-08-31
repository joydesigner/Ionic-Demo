(function () {
  'use strict';
  angular.module('eliteApp', ['ionic', 'ngLodash'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('home', {
          url: '/home',
          abstract: true,
          templateUrl: 'app/home/home.html'
        })
        .state('home.leagues', {
          url: '/leagues',
          views: {
            'tab-leagues': {
              templateUrl: 'app/home/leagues.html'
            }
          }
        })
        .state('home.myteams', {
          url: '/myteams',
          views: {
            'tab-myTeams': {
              templateUrl: 'app/home/myteams.html'
            }
          }
        })
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/layout/menu-layout.html'
        })
        .state('app.teams', {
          url: '/teams',
          cache: false,
          views: {
            'mainContent': {
              templateUrl: 'app/teams/teams.html'
            }
          }
        })
        .state('app.team-detail', {
          url: '/teams/:id',
          views: {
            'mainContent': {
              templateUrl: 'app/teams/team-detail.html'
            }
          }
        })
        .state('app.game', {
          url: '/game',
          views: {
            'mainContent': {
              templateUrl: 'app/game/game.html'
            }
          }
        })
        .state('app.standings', {
          url: '/standings',
          cache: false,
          views: {
            'mainContent': {
              templateUrl: 'app/standings/standings.html'
            }
          }
        })
        .state('app.locations', {
          url: '/locations',
          views: {
            'mainContent': {
              templateUrl: 'app/locations/locations.html'
            }
          }
        })
        .state('app.rules', {
          url: '/rules',
          views: {
            'mainContent': {
              templateUrl: 'app/rules/rules.html'
            }
          }
        })
      ;

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/teams');
    });
})();

