miModulo.controller("compraEditController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    "dateService",
    function ($scope, auth, $location, ajaxService, $routeParams, dateService) {
        $scope.controller = "compraEditController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-edit";
        $scope.operationName = "Edición de ";
        $scope.entityName = "compra";
        $scope.entityIcon = "fas fa-cash-register";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.id = $routeParams.id;

        ajaxService.ajaxGet($scope.entityName, $scope.id).then(function (response) {
            $scope.entity = response.data;
            $scope.fecha = dateService.getDate(response.data.fecha);
        }).catch(function (error) {
            $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
        });

        $scope.save = function () {
            var datos = JSON.stringify({
                cantidad: $scope.entity.cantidad,
                precio: $scope.entity.precio,
                fecha: moment($scope.fecha).format("DD/MM/YYYY hh:mm"),
                descuento_usuario: $scope.entity.descuento_usuario,
                descuento_producto: $scope.entity.descuento_producto,
                producto: { id: parseInt($scope.entity.id_producto) },
                factura: { id: parseInt($scope.entity.id_factura) }
            });
            ajaxService.ajaxUpdate($scope.entityName, $scope.entity.id, datos).then(function (response) {
                $scope.status.success = "La" + $scope.entityName + " con id " + $scope.id + " ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido guardar.";
            });
        }
        $scope.lookupProducto = function () {
            ajaxService.ajaxGet("producto", $scope.entity.producto.id).then(function (response) {
                $scope.entity.producto = response.data;
            }).catch(function (error) {
                $scope.entity.producto = { id: 0, nombre: "???" };
            });
        }
        $scope.lookupFactura = function () {
            ajaxService.ajaxGet("factura", $scope.entity.factura.id).then(function (response) {
                $scope.entity.factura = response.data;
            }).catch(function (error) {
                $scope.entity.factura = { id: 0, nombre: "???" };
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);
