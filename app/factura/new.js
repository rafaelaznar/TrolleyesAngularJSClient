miModulo.controller("facturaNewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    function ($scope, auth, $location, ajaxService) {
        $scope.controller = "facturaNewController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-plus";
        $scope.operationName = "Alta de ";
        $scope.entityName = "factura";
        $scope.entityIcon = "fas fa-file-invoice-dollar";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

       

        $scope.save = function () {
            var datos = JSON.stringify({ fecha: $scope.entity.fecha, iva: $scope.entity.iva, id_usuario: $scope.entity.idusuario, pagado : $scope.entity.pagado });
            ajaxService.ajaxNew($scope.entityName, datos).then(function (response) {
                $scope.status.success = "La " + $scope.entityName + "  ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + "  NO se ha podido crear.";
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);