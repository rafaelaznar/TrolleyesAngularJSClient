miModulo.controller("LogoutController", [
  "$scope",
  "ajaxService",
  "auth",
  function ($scope, ajaxService, auth) {    
    $scope.nombreUsuario = auth.data;
    $scope.controller = "LogoutController";

    $scope.logout = function () {
      ajaxService.ajaxLogout().then(function (response) {
        $scope.respuesta = response.data;
        console.log($scope.respuesta);
      });
    };
  }
]);
