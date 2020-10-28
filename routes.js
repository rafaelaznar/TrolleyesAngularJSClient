miModulo.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "home.html",
      controller: "HomeController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/home", {
      templateUrl: "home.html",
      controller: "HomeController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/login", {
      templateUrl: "login.html",
      controller: "LoginController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/logout", {
      templateUrl: "logout.html",
      controller: "LogoutController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/logout2", {
      templateUrl: "logout2.html",
      controller: "LogoutController2",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/secret", {
      templateUrl: "secret.html",
      controller: "SecretController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/private", {
      templateUrl: "private.html",
      controller: "PrivateController",
    });

    $routeProvider.otherwise({ redirectTo: "/" });
  },
]);
