var zapretApp = angular.module('zapretApp', [
'ngRoute',
'zapretControllers'
]);


zapretApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider

        .when('/:id', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
  }]);

