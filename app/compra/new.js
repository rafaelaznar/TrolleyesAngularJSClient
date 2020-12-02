miModulo.controller("compraNewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "iconService",
    function ($scope, auth, $location, ajaxService, iconService) {
        $scope.controller = "compraNewController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("new");
        $scope.operationName = "Alta de ";
        $scope.entityName = "compra";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({ cantidad: $scope.entity.cantidad, precio: $scope.entity.precio, fecha: $scope.entity.fecha, descuento_usuario: $scope.entity.descuento_usuario, descuento_producto: $scope.entity.descuento_producto, id_producto: $scope.entity.id_producto, factura: $scope.entity.factura });
            ajaxService.ajaxNew($scope.entityName, datos).then(function (response) {
                $scope.status.success = "La" + $scope.entityName + " ha sido guardada."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + " NO se ha podido leer.";
            });
        }

        $scope.lookupFactura = function () {
            ajaxService.ajaxGet("factura", $scope.entity.factura.id).then(function (response) {
                $scope.entity.factura = response.data;
            }).catch(function (error) {
                $scope.entity.factura = { id: "" };
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);
