miModulo.controller("carritoEditController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  "$routeParams",
  function ($scope, auth, $location, ajaxService, $routeParams) {
    $scope.controller = "carritoEditController";
    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }
    $scope.operationIcon = "fas fa-edit";
    $scope.operationName = "Edición de ";
    $scope.entityName = "carrito";
    $scope.entityIcon = "fas fa-shopping-cart";

    $scope.status = {};
    $scope.status.success = "";
    $scope.status.error = "";

    $scope.id = $routeParams.id;

    ajaxService.ajaxGet($scope.entityName, $scope.id).then(function (response) {
      $scope.entity = response.data;
    }).catch(function (error) {
      $scope.status.error = "ERROR: El " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
    });

    $scope.save = function () {
      var datos = JSON.stringify({ cantidad: $scope.entity.cantidad, precio: $scope.entity.precio, id_producto: $scope.entity.id_producto, id_usuario: $scope.entity.id_usuario, });
      ajaxService.ajaxUpdate($scope.entityName, $scope.entity.id, datos).then(function (response) {
        $scope.status.success = "El" + $scope.entityName + " con id " + $scope.id + " ha sido guardado."
      }).catch(function (error) {
        $scope.status.error = "ERROR: El " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
      });
    }

    $scope.back = function () {
      window.history.back();
    };
  },
]);
