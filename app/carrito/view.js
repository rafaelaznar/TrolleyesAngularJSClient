miModulo.controller("carritoViewController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  "$routeParams",
  function ($scope, auth, $location, ajaxService, $routeParams) {
    $scope.controller = "carritoViewController";
    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }
    $scope.operationIcon = "fas fa-eye";
    $scope.operationName = "Vista de ";
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


    $scope.back = function () {
      window.history.back();
    };
  },
]);
