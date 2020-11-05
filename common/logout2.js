miModulo.controller("LogoutController2", [
  "$scope",
  "ajaxService",
  "auth",
  "$location",
  function ($scope, ajaxService, auth, $location) {
    if (auth.data.status == 403) {
      $location.path("/home");
    }
    $scope.fallo = false;
    $scope.nombreUsuario = auth.data;
    $scope.controller = "LogoutController2";

    $scope.logout = function () {
      ajaxService.ajaxLogout().then(function (response) {
        $scope.respuesta = response.data;
        if ($scope.respuesta.status == 200) {
          $location.path("/home");
        } else {
          $scope.fallo = true;
        }
      });
    };
  },
]);
