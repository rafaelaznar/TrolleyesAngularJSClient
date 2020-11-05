miModulo.controller("SecretController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  function ($scope, auth, $location, ajaxService) {
    $scope.nombreUsuario = auth.data;
    $scope.controller = "SecretController";
    if (auth.data.status == 403) {
      $location.path("/home");
    }

    ajaxService.ajaxGet().then(function (response) {
      if (response.data.status == 200) {
        $scope.secretVar = response.data.message;
      }
    });

    //llamada AJAX para ver el contenido
  },
]);
