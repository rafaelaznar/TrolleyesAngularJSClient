miModulo.controller("productoEditController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    function ($scope, auth, $location, ajaxService, $routeParams) {
        $scope.controller = "productoEditController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-edit";
        $scope.operationName = "Edición de ";
        $scope.entityName = "producto";
        $scope.entityIcon = "fas fa-gift";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.id = $routeParams.id;

        ajaxService.ajaxGet($scope.entityName, $scope.id).then(function (response) {
            $scope.entity = response.data;
        }).catch(function (error) {
            $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
        });

        $scope.save = function () {
            var datos = JSON.stringify({ codigo: $scope.entity.codigo, nombre: $scope.entity.nombre, existencias: $scope.entity.existencias, precio : $scope.entity.precio, imagen : $scope.entity.imagen, descuento : $scope.entity.descuento, tipoproducto : {"id":$scope.entity.tipoproducto.id,"nombre":$scope.entity.tipoproducto.nombre}  });
            ajaxService.ajaxUpdate($scope.entityName, $scope.entity.id, datos).then(function (response) {
                $scope.status.success = "La " + $scope.entityName + " con id " + $scope.id + " ha sido guardada."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
            });
        }
        $scope.lookupTipoproducto = function () {
            ajaxService.ajaxGet("tipoproducto", $scope.entity.tipoproducto.id).then(function (response) {
                $scope.entity.tipoproducto = response.data;
            }).catch(function (error) {
                $scope.entity.tipoproducto = { id: 0, nombre: "???" };
            });
        }
        $scope.back = function () {
            window.history.back();
        };
    },
]);
