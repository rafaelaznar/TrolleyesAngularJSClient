miModulo.controller("carritoRemoveController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  "$routeParams",
  "iconService",
  function ($scope, auth, $location, ajaxService, $routeParams, iconService) {
    $scope.controller = "carritoRemoveController";
    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }
    $scope.operationIcon = iconService.getIcon("remove");
    $scope.operationName = "Borrado de ";
    $scope.entityName = "carrito";
    $scope.entityIcon = iconService.getIcon($scope.entityName);
    $scope.iconService = iconService;

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
        .ajaxRemove($scope.entityName, $scope.id).then(function (response) {
          if (response.status == 200) {
            $scope.status.success = "El " + $scope.entityName + " con id " + $scope.id + " se ha borrado.";
            return ajaxService.ajaxCheck();
          }
        }).then(function (result) {
          $scope.datosDeSesion = result;
        }).catch(function (error) {
          $scope.status.error = "ERROR: El " + $scope.entityName + " con id " + $scope.id + " NO se ha podido borrar.";
        });
    };

    $scope.back = function () {
      window.history.back();
    };
  },
]);
