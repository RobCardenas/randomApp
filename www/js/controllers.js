angular.module('randomApp.controllers', [])

  // Filter to reverse the order of posts in Cartel's feed.
  .filter('reverse', function() {
    return function(shots) {
      return shots.slice().reverse();
    };
  })

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

  .controller('PlaylistCtrl', function($scope, $stateParams) {
  })

  .controller('CartelCtrl', function($scope,$http) {
  // $scope.stories = [];
  $http.get('https://merch-connect.herokuapp.com/api/posts')
    .success(function(response) {
        $scope.posts = response;
      });
})

  .controller('DribbbleCtrl', function($scope,$http) {
  $http.jsonp("https://api.dribbble.com/v1/shots?access_token=3457716a78f7869e4e28edd9322a4a54358ce7da6076a5dc97e51a0d167bd70e&callback=JSON_CALLBACK")
    .then(function(response) {
        $scope.shots = response.data.data;
        console.log($scope.shots);
      });
})




;
