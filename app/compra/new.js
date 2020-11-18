miModulo.controller("compraNewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    function ($scope, auth, $location, ajaxService) {
        $scope.controller = "compraNewController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-plus";
        $scope.operationName = "Alta de ";
        $scope.entityName = "compra";
        $scope.entityIcon = "fas fa-cash-register";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({ cantidad: $scope.entity.cantidad, precio: $scope.entity.precio, fecha: $scope.entity.fecha, descuento_usuario: $scope.entity.descuento_usuario, descuento_producto: $scope.entity.descuento_producto, id_producto: $scope.entity.id_producto, id_factura: $scope.entity.id_factura });
            ajaxService.ajaxNew($scope.entityName, datos).then(function (response) {
                $scope.status.success = "La" + $scope.entityName + " ha sido guardada."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + " NO se ha podido leer.";
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);
