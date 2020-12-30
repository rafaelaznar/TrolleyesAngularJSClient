miModulo.controller("facturaNewController", [
    "$scope", "auth", "$location", "ajaxService", "iconService", "titleService",
    function ($scope, auth, $location, ajaxService, iconService, titleService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "new";
        $scope.entity = "factura";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({
                fecha: moment($scope.fecha).format("DD/MM/YYYY hh:mm"),
                iva: $scope.entityData.iva,
                usuario: { "id": $scope.entityData.usuario.id },
                pagado: $scope.entityData.pagado
            });
            ajaxService.ajaxNew($scope.entity, datos).then(function (response) {
                $scope.status.success = "La " + $scope.entity + "  ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entity + "  NO se ha podido crear.";
            });
        }

        $scope.lookupUsuario = function () {
            ajaxService.ajaxGet("usuario", $scope.entityData.usuario.id).then(function (response) {
                $scope.entity.usuario = response.data;
            }).catch(function (error) {
                $scope.entity.usuario = { id: "", nombre: "???" };
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);