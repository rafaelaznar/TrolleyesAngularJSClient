miModulo.controller("LogoutController", [
  "$scope",
  "ajaxService",
  "auth",
  "$location",
  "iconService",
  function ($scope, ajaxService, auth, $location, iconService) {
    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }

    $scope.operationIcon = iconService.getIcon("salidaSistema");
    $scope.operationName = "Salida del ";
    $scope.entityName = "sistema";
    $scope.entityIcon = iconService.getIcon("accesoSistema");
    $scope.iconService = iconService;

    $scope.controller = "LogoutController";

    $scope.status = {};
    $scope.status.success = "";
    $scope.status.error = "";

    $scope.logout = function () {
      ajaxService.ajaxLogout().then(function (response) {
        $scope.respuesta = response;
        $scope.status.success = "Has abandonado el sistema";
        $location.path("/home");
      }).catch(function (error) {
        $scope.status.error = "ERROR: No se ha podido comunicar con el servidor: No has salido del sistema.";
      });
    };
    $scope.back = function () {
      window.history.back();
    };
  },
]);
