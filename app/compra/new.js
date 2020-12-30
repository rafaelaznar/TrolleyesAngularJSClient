miModulo.controller("compraNewController", [
    "$scope", "auth", "$location", "ajaxService", "iconService", "titleService",
    function ($scope, auth, $location, ajaxService, iconService, titleService) {
        $scope.controller = "compraNewController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "new";
        $scope.entity = "compra";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({
                cantidad: $scope.entityData.cantidad,
                precio: $scope.entityData.precio,
                fecha: moment($scope.fecha).format("DD/MM/YYYY hh:mm"),
                descuento_usuario: $scope.entityData.descuento_usuario,
                descuento_producto: $scope.entityData.descuento_producto,
                producto: { id: parseInt($scope.entityData.producto.id) },
                factura: { id: parseInt($scope.entityData.factura.id) }
            });
            ajaxService.ajaxNew($scope.entity, datos).then(function (response) {
                $scope.status.success = "La" + $scope.entity + " ha sido guardada."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entity + " NO se ha podido leer.";
            });
        }

        $scope.lookupFactura = function () {
            ajaxService.ajaxGet("factura", $scope.entityData.factura.id).then(function (response) {
                $scope.entity.factura = response.data;
            }).catch(function (error) {
                $scope.entity.factura = { id: "" };
            });
        }

        $scope.lookupProducto = function () {
            ajaxService.ajaxGet("producto", $scope.entityData.producto.id).then(function (response) {
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
