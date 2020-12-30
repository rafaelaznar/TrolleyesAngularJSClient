miModulo.controller("LoginController", [
  "$scope", "$location", "ajaxService", "auth", "iconService", "titleService",
  function ($scope, $location, ajaxService, auth, iconService, titleService) {

    if (auth.data.status == 200) {
      $location.path("/home");
    } else {
      $scope.nombreUsuario = auth.data.data.nombre;
    }

    $scope.operation = "login";
    $scope.entity = "system";
    $scope.iconService = iconService;
    $scope.titleService = titleService;

    $scope.status = {};
    $scope.status.success = "";
    $scope.status.error = "";

    $scope.login = function () {
      ajaxService.ajaxLogin($scope.txtLogin, $scope.txtPassword).then(function (response) {
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
      ajaxService.ajaxLogin($scope.autoLogin, "trolleyes").then(function (response) {
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
