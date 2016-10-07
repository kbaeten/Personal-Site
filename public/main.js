var app = angular.module("mySite", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/about.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

$( document ).ready(function() {

  console.log("Hello");
  $("#aboutButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutContainer").offset().top},
        'slow');
  });

  $("#portfolioButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolioTitle").offset().top},
        'slow');
  });

  $("#experienceButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#experienceTitle").offset().top},
        'slow');
  });

});
