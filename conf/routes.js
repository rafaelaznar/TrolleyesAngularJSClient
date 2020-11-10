miModulo.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "common/home.html",
      controller: "HomeController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/home", {
      templateUrl: "common/home.html",
      controller: "HomeController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/login", {
      templateUrl: "common/login.html",
      controller: "LoginController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/logout", {
      templateUrl: "common/logout.html",
      controller: "LogoutController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/logout", {
      templateUrl: "common/logout.html",
      controller: "LogoutController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      },
    });

    $routeProvider.when("/producto/view/:id", {
      templateUrl: "app/producto/view.html",
      controller: "productoViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/producto/remove/:id", {
      templateUrl: "app/producto/remove.html",
      controller: "productoRemoveController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipousuario/view/:id", {
      templateUrl: "app/tipousuario/view.html",
      controller: "tipousuarioViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.otherwise({ redirectTo: "/" });
  },
]);
