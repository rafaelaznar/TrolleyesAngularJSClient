miModulo.controller("HomeController", [
  "$scope",
  "auth",
  function ($scope, auth) {
    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    }
    $scope.controller = "HomeController";

    $scope.operationIcon = "fas fa-home";
    $scope.operationName = "Bienvenidos a  ";
    $scope.entityName = "TROLLEYES";
    $scope.entityIcon = "fas fa-shopping-cart";


  }
]);
