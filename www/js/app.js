angular.module('randomApp', ['ionic', 'randomApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.cordove && window.cordova.InAppBrowser) {
      window.open = window.cordova.InAppBrowser.open;
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.cARTel', {
    url: '/cARTel',
    views: {
      'menuContent': {
        templateUrl: 'templates/cARTel.html',
        controller: 'CartelCtrl'
      }
    }
  })

  .state('app.dribbble', {
      url: '/dribbble',
      views: {
        'menuContent': {
          templateUrl: 'templates/dribbble.html',
          controller: 'DribbbleCtrl'
        }
      }
    })
    .state('app.weather', {
      url: '/weather',
      views: {
        'menuContent': {
          templateUrl: 'templates/weather.html',
          controller: 'WeatherCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cARTel');
});
