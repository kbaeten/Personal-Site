var app = angular.module("mySite", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/about.html'
    })
    .when('/portfolio', {
      templateUrl: 'partials/portfolio.html'
    })
    .when('/experience', {
      templateUrl: 'partials/experience.html',
      // controller: 'storiesController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
