miModulo.controller("usuarioViewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    function ($scope, auth, $location, ajaxService, $routeParams) {
      $scope.controller = "usuarioViewController";
      if (auth.data.status == 200) {
        $scope.datosDeSesion = auth.data;
      } else {
        $location.path("/home");
      }
      $scope.operationIcon = "fas fa-eye";
      $scope.operationName = "Vista de ";
      $scope.entityName = "usuario";
      $scope.entityIcon = "fas fa-gift";
  
      $scope.status = {};
      $scope.status.success = "";
      $scope.status.error = "";
  
      $scope.id = $routeParams.id;
  
      ajaxService.ajaxGet("usuario", $scope.id).then(function (response) {
        $scope.entity = response.data;
      }).catch(function (error) {
        $scope.status.error = "ERROR: El " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
      });
  
  
      $scope.volver = function () {
        window.history.back();
      };
    },
  ]);
  