miModulo.controller("LogoutController2", [
  "$scope",
  "ajaxService",
  "auth",
  "$location",
  function ($scope, ajaxService, auth, $location) {
    if (auth.data.status==200){
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }
    $scope.fallo = false;
    $scope.nombreUsuario = auth.data;
    $scope.controller = "LogoutController2";

    $scope.logout = function () {
      ajaxService.ajaxLogout().then(function (response) {
        $scope.respuesta = response;
        if ($scope.respuesta.status == 200) {
          $location.path("/home");
        } else {
          $scope.fallo = true;
        }
      });
    };
  },
]);
