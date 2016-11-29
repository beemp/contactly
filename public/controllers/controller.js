function AppCtrl(){
  console.log('hi')
}


var myApp = angular.module('MyApp', [])
myApp.controller('AppCtrl', ['$scope', '$http',
function($scope, $http) {
  console.log('hi');
}])
