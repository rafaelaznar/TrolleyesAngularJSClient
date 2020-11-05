var miModulo = angular.module("myApp", ["ngRoute"]);

miModulo.config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  },
]);

miModulo.config([
  "$locationProvider",
  function ($locationProvider) {
    $locationProvider.html5Mode({ enabled: true });
  },
]);
