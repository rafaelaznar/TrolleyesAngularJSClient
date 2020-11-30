miModulo.controller("LoginController", [
  "$scope",
  "$location",
  "ajaxService",
  "auth",
  function ($scope, $location, ajaxService, auth) {
    if (auth.data.status == 200) {
      $location.path("/home");
    } else {
      $scope.nombreUsuario = auth.data.data.nombre;
    }

    $scope.operationIcon = "fas fa-sign-in";
    $scope.operationName = "Formulario de ";
    $scope.entityName = "entrada al sistema";
    $scope.entityIcon = "fas fa-key";

    $scope.controller = "LoginController";

    $scope.status = {};
    $scope.status.success = "";
    $scope.status.error = "";

    $scope.login = function () {
      ajaxService
        .ajaxLogin($scope.txtLogin, $scope.txtPassword)
        .then(function (response) {
          $scope.respuesta = response;
          $scope.status.success = "Has entrado al sistema";
          $location.path("/home");
        }).catch(function (error) {
          if (error.status == 401) {
            $scope.status.error = "ERROR: Login o password incorrectos: No has entrado al sistema.";
          } else {
            $scope.status.error = "ERROR: No se ha podido comunicar con el servidor: No has entrado al sistema.";
          }
        });
    };

    $scope.auto = function (user) {
      $scope.autoLogin = user;
      ajaxService
        .ajaxLogin($scope.autoLogin, "trolleyes")
        .then(function (response) {
          $scope.respuesta = response;
          $scope.status.success = "Has entrado al sistema";
          $location.path("/home");
          $scope.autoLogin = "";
        }).catch(function (error) {
          if (error.status == 401) {
            $scope.status.error = "ERROR: Login o password incorrectos: No has entrado al sistema.";
          } else {
            $scope.status.error = "ERROR: No se ha podido comunicar con el servidor: No has entrado al sistema.";
          }
        });
    };
    
    $scope.reset = function () {
      $scope.txtLogin = "";
      $scope.txtPassword = "";
      $scope.status.success = "";
      $scope.status.error = "";
    }

  },
]);
