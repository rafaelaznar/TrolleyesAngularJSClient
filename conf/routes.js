miModulo.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "common/home.html",
      controller: "HomeController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/home", {
      templateUrl: "common/home.html",
      controller: "HomeController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/login", {
      templateUrl: "common/login.html",
      controller: "LoginController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/logout", {
      templateUrl: "common/logout.html",
      controller: "LogoutController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/logout2", {
      templateUrl: "common/logout2.html",
      controller: "LogoutController2",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/secret", {
      templateUrl: "app/secret.html",
      controller: "SecretController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });

    $routeProvider.when("/producto/view/:id", {
      templateUrl: "app/producto/view.html",
      controller: "productoViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService.ajaxCheck();
        },
      },
    });


    $routeProvider.otherwise({ redirectTo: "/" });
  },
]);
