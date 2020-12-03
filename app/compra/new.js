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
            var datos = JSON.stringify({ cantidad: $scope.entity.cantidad, precio: $scope.entity.precio, fecha: moment($scope.fecha).format("DD/MM/YYYY hh:mm"), descuento_usuario: $scope.entity.descuento_usuario, descuento_producto: $scope.entity.descuento_producto, producto: {id: parseInt($scope.entity.producto.id)}, factura: {id: parseInt($scope.entity.factura.id)} });
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

        $scope.lookupProducto = function () {
            ajaxService.ajaxGet("producto", $scope.entity.producto.id).then(function (response) {
                $scope.entity.producto = response.data;
            }).catch(function (error) {
                $scope.entity.producto = { id: "" };
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);
