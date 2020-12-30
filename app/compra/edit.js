miModulo.controller("compraEditController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "dateService", "iconService", "titleService",
    function ($scope, auth, $location, ajaxService, $routeParams, dateService, iconService, titleService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "edit";
        $scope.entity = "compra";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.id = $routeParams.id;

        ajaxService.ajaxGet($scope.entity, $scope.id).then(function (response) {
            $scope.entityData = response.data;
            //$scope.fecha = dateService.getDate(response.data.fecha);
            $scope.fecha = moment(response.data.fecha, 'DD/MM/YYYY HH:mm').toDate();
        }).catch(function (error) {
            $scope.status.error = "ERROR: La " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
        });

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
            ajaxService.ajaxUpdate($scope.entity, $scope.entityData.id, datos).then(function (response) {
                $scope.status.success = "La" + $scope.entity + " con id " + $scope.id + " ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entity + " con id " + $scope.id + " NO se ha podido guardar.";
            });
        }
        $scope.lookupProducto = function () {
            ajaxService.ajaxGet("producto", $scope.entityData.producto.id).then(function (response) {
                $scope.entity.producto = response.data;
            }).catch(function (error) {
                $scope.entity.producto = { id: 0, nombre: "???" };
            });
        }
        $scope.lookupFactura = function () {
            ajaxService.ajaxGet("factura", $scope.entityData.factura.id).then(function (response) {
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
