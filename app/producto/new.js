miModulo.controller("productoNewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    function ($scope, auth, $location, ajaxService) {
        $scope.controller = "productoNewController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-plus";
        $scope.operationName = "Alta de ";
        $scope.entityName = "producto";
        $scope.entityIcon = "fas fa-gift";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

       

        $scope.save = function () {
            var datos = JSON.stringify({ codigo: $scope.entity.codigo, nombre: $scope.entity.nombre, existencias: $scope.entity.existencias, precio : $scope.entity.precio, imagen : $scope.entity.imagen, descuento : $scope.entity.descuento, id_tipoproducto : $scope.entity.idtipoproducto });
            ajaxService.ajaxNew($scope.entityName, datos).then(function (response) {
                $scope.status.success = "El " + $scope.entityName + "  ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: El " + $scope.entityName + "  NO se ha podido crear.";
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);