miModulo.controller("usuarioEditController", [
  "$scope", "auth", "$location", "ajaxService", "$routeParams", "iconService", "titleService", "regexService",
  function ($scope, auth, $location, ajaxService, $routeParams, iconService, titleService, regexService) {

    if (auth.data.status == 200) {
      $scope.datosDeSesion = auth.data;
    } else {
      $location.path("/home");
    }

    $scope.operation = "edit";
    $scope.entity = "usuario";
    $scope.iconService = iconService;
    $scope.titleService = titleService;
    $scope.regexService = regexService;

    $scope.status = {};
    $scope.status.success = "";
    $scope.status.error = "";

    $scope.id = $routeParams.id;

    ajaxService.ajaxGet($scope.entity, $scope.id).then(function (response) {
      $scope.entityData = response.data;
    }).catch(function (error) {
      $scope.status.error = "ERROR: El " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
    });

    $scope.save = function () {
      var datos = JSON.stringify({
        id: $scope.entityData.id,
        dni: $scope.entityData.dni,
        nombre: $scope.entityData.nombre,
        apellido1: $scope.entityData.apellido1,
        apellido2: $scope.entityData.apellido2,
        login: $scope.entityData.login,
        password: $scope.entityData.password,
        email: $scope.entityData.email,
        descuento: parseFloat($scope.entityData.descuento),
        tipousuario: { "id": $scope.entityData.tipousuario.id }
      });
      ajaxService.ajaxUpdate($scope.entity, $scope.entityData.id, datos).then(function (response) {
        $scope.status.success = "El" + $scope.entity + " con id " + $scope.id + " ha sido guardado."
      }).catch(function (error) {
        $scope.status.error = "ERROR: El " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
      });
    }

    $scope.back = function () {
      window.history.back();
    };
  },
]);
