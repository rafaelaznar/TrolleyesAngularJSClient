miModulo.controller("tipoproductoViewController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  "$routeParams",
  "iconService",
  function ($scope, auth, $location, ajaxService, $routeParams, iconService) {
    $scope.controller = "tipoproductoViewController";
    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }
    $scope.operationIcon = iconService.getIcon("view");
    $scope.operationName = "Vista de ";
    $scope.entityName = "tipoproducto";
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


    $scope.back = function () {
      window.history.back();
    };
  },
]);
