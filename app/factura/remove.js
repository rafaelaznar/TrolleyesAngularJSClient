miModulo.controller("facturaRemoveController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  "$routeParams",
  function ($scope, auth, $location, ajaxService, $routeParams) {
    $scope.controller = "facturaRemoveController";
    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }
    $scope.operationIcon = "fas fa-eraser";
    $scope.operationName = "Borrado de ";
    $scope.entityName = "factura";
    $scope.entityIcon = "fas fa-gift";

    $scope.status = {};
    $scope.status.success = "";
    $scope.status.error = "";

    $scope.id = $routeParams.id;

    ajaxService.ajaxGet($scope.entityName, $scope.id).then(function (response) {
      $scope.entity = response.data;
    }).catch(function (error) {
      $scope.status.error = "ERROR: El " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
    });

    $scope.remove = function () {
      ajaxService
        .ajaxRemove($scope.entityName, $scope.id)
        .then(function (response) {
          if (response.status == 200) {
            $scope.status.success = "El " + $scope.entityName + " con id " + $scope.id + " se ha borrado.";
          }
        })
        .catch(function (error) {
          $scope.status.error = "ERROR: El " + $scope.entityName + " con id " + $scope.id + " NO se ha podido borrar.";
        });
    };

    $scope.back = function () {
      window.history.back();
    };
  },
]);
