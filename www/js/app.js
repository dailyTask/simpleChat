// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','firebase']);
app.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('chat', {
      url: '/chat',
      templateUrl: 'templates/chat.html',
      controller: 'ChatCtrl'
    })

$urlRouterProvider.otherwise('/chat')










});
app.factory('Messages', function($firebaseArray) {
  var messagesRef = new Firebase("https://sufichatapp.firebaseio.com");
  return $firebaseArray(messagesRef);
});
app.controller('ChatCtrl', function($scope, $state, $ionicPopup, Messages) {

  $scope.messages = Messages;

  $scope.addMessage = function() {

    $ionicPopup.prompt({
      title: 'Need to get something off your chest?',
      template: 'Let everybody know!'
    }).then(function(res) {
      $scope.messages.$add({
        "message": res
      });
    });
  };

  $scope.logout = function() {
    var ref = new Firebase("https://sufichatapp.firebaseio.com");
    ref.unauth();
    $state.go('login');
  };

})


























app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
