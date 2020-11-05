miModulo.controller("productoViewController", [
  "$scope",
  "auth",
  "$location",
  "ajaxService",
  "$routeParams",
  function ($scope, auth, $location, ajaxService, $routeParams) {
    $scope.nombreUsuario = auth.data;
    $scope.controller = "productoViewController";
    if (auth.data.status == 403) {
      $location.path("/home");
    }

    $scope.id = $routeParams.id;

    ajaxService.ajaxGet("producto", $scope.id).then(function (response) {
      //if (response.data.status == 200) {
        $scope.entity = response.data;
      //}
    });
  },
]);
