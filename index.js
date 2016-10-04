// Top level container ng-app directive which is in html tag, angular module goes in index.js
myApp = angular.module('angApp', []);

// ng-controller directive in html body tag, angular controller goes in index.js
myApp.controller('AngController', ['$scope', '$http', function($scope, $http) {

    //This is how to point to local .json/angular service to read contents of .json file vs putting .json file into variable in index.js
    $http.get('topspots.json')
        .then(function(city) {
            $scope.places = city.data.topspots;

        });


}]);
