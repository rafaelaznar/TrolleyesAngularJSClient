miModulo.controller("productoNewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "iconService",
    "titleService",
    function ($scope, auth, $location, ajaxService, iconService, titleService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "new";
        $scope.entity = "producto";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({ codigo: $scope.entityData.codigo, nombre: $scope.entityData.nombre, existencias: $scope.entityData.existencias, precio: $scope.entityData.precio, imagen: $scope.entityData.imagen, descuento: $scope.entityData.descuento, tipoproducto: { "id": $scope.entityData.tipoproducto.id, "nombre": $scope.entityData.tipoproducto.nombre } });
            ajaxService.ajaxNew($scope.entity, datos).then(function (response) {
                $scope.status.success = "El " + $scope.entity + "  ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: El " + $scope.entity + "  NO se ha podido crear.";
            });
        }

        $scope.lookupTipoproducto = function () {
            ajaxService.ajaxGet($scope.entity, $scope.entityData.tipoproducto.id).then(function (response) {
                $scope.entityData.tipoproducto = response.data;
            }).catch(function (error) {
                $scope.entityData.tipoproducto = { id: "", nombre: "???" };
            });
        }


        $scope.lookupProducto = function () {
            ajaxService.ajaxGet("producto", $scope.entityData.producto.id).then(function (response) {
                $scope.entityData.producto = response.data;
            }).catch(function (error) {
                $scope.entityData.producto = {
                    id: 0, codigo: "???", nombre: "???", existencias: 0, precio: 0, imagen: "???",
                    descuento: 0, id_tipoproducto: "???"
                };
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);