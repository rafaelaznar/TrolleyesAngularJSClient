miModulo.controller("facturaNewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "iconService",
    function ($scope, auth, $location, ajaxService, iconService) {
        $scope.controller = "facturaNewController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("new");
        $scope.operationName = "Alta de ";
        $scope.entityName = "factura";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({ fecha: moment($scope.fecha).format("DD/MM/YYYY hh:mm"), iva: $scope.entity.iva, usuario: { id: parseInt($scope.entity.usuario.id) }, pagado: $scope.entity.pagado  });
            ajaxService.ajaxNew($scope.entityName, datos).then(function (response) {
                $scope.status.success = "La " + $scope.entityName + "  ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + "  NO se ha podido crear.";
            });
        }

        $scope.lookupUsuario = function () {
            ajaxService.ajaxGet("usuario", $scope.entity.usuario.id).then(function (response) {
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