miModulo.controller("LoginController", [
  "$scope",
  "$location",
  "ajaxService",
  "auth",
  function ($scope, $location, ajaxService, auth) {
    if (auth.data != null) {
      $location.path("/home");
    }

    $scope.controller = "LoginController";

    $scope.fallo = false;

    $scope.login = function () {
      ajaxService
        .ajaxLogin($scope.txtLogin, $scope.txtPassword)
        .then(function (response) {
          $scope.respuesta = response.data;
          if ($scope.respuesta == "Welcome") {
            $scope.fallo = false;
            $location.path("/home");
          } else {
            $scope.fallo = true;
          }
        });
    };
  },
]);
