miModulo.controller("HomeController", [
  "$scope",
  "auth",
  function ($scope, auth) {
    $scope.nombreUsuario = auth.data;
    $scope.controller = "HomeController";
    $scope.mensaje = "Bienvenidos a la práctica AJAX20 de DAW";
  }
]);
