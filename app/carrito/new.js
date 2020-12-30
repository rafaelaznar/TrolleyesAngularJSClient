miModulo.controller("carritoNewController", [
    "$scope", "auth", "$location", "ajaxService", "iconService", "titleService",
    function ($scope, auth, $location, ajaxService, iconService, titleService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "new";
        $scope.entity = "carrito";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({
                nombre: $scope.entityData.nombre
            });
            ajaxService.ajaxNew($scope.entity, datos).then(function (response) {
                $scope.status.success = "El " + $scope.entity + " " + $scope.entity.nombre + " ha sido guardado.";
            }).catch(function (error) {
                $scope.status.error = "ERROR: El " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
            });
        };

        $scope.back = function () {
            window.history.back();
        };
    },
]);