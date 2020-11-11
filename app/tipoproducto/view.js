miModulo.controller("tipoproductoViewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    function ($scope, auth, $location, ajaxService, $routeParams) {
      $scope.controller = "tipoproductoViewController";
      if (auth.data.status == 200) {
        $scope.datosDeSesion = auth.data;
      } else {
        $location.path("/home");
      }
      $scope.operationIcon = "fas fa-eye";
      $scope.operationName = "Vista de ";
      $scope.entityName = "tipoproducto";
      $scope.entityIcon = "fas fa-cubes";
  
      $scope.status = {};
      $scope.status.success = "";
      $scope.status.error = "";
  
      $scope.id = $routeParams.id;
  
      ajaxService.ajaxGet("tipoproducto", $scope.id).then(function (response) {
        $scope.entity = response.data;
      }).catch(function (error) {
        $scope.status.error = "ERROR: El " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
      });
  
  
      $scope.back = function () {
        window.history.back();
      };
    },
  ]);
  