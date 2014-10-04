var zapretApp = angular.module('zapretApp', [
'ngRoute',
'zapretControllers'
]);


zapretApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider
        
        .when('/:what/:why', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/:id', {
            templateUrl: 'views/main.html',
            controller: 'EmptyCtrl'
        })
        .otherwise({
            templateUrl: 'views/main.html',
            controller: 'EmptyCtrl'
        });
  }]);

