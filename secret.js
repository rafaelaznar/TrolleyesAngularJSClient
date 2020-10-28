miModulo.controller("SecretController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  function ($scope, auth, $location, ajaxService) {
  
    $scope.nombreUsuario = auth.data;
    $scope.controller = "SecretController";
    
    if (auth.data == null) {
      $location.path("/home");
    }

    ajaxService.ajaxGet().then(function (response) {
      $scope.secretVar = response.data;
    });

    //llamada AJAX para ver el contenido
  },
]);
