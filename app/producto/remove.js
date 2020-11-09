miModulo.controller("productoRemoveController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  "$routeParams",
  function ($scope, auth, $location, ajaxService, $routeParams) {
    $scope.controller = "productoRemoveController";
    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }
    $scope.operationIcon = "fas fa-eye";
    $scope.operationName = "Vista de ";
    $scope.entityName = "producto";
    $scope.entityIcon = "fas fa-gift";

    $scope.id = $routeParams.id;

    ajaxService.ajaxGet("producto", $scope.id).then(function (response) {
      //if (response.data.status == 200) {
      $scope.entity = response.data;

      //}
    });

    $scope.remove = function () {
        ajaxService.ajaxRemove("producto", $scope.id).then(function (response) {
            //if (response.data.status == 200) {
            //$scope.entity = response.data;
      
            //}
          });
    };

    $scope.volver = function () {
      window.history.back();
    };
  },
]);
