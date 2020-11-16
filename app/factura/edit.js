miModulo.controller("facturaEditController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    function ($scope, auth, $location, ajaxService, $routeParams) {
        $scope.controller = "facturaEditController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-edit";
        $scope.operationName = "Edición de ";
        $scope.entityName = "factura";
        $scope.entityIcon = "fas fa-file-invoice-dollar";

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
            var datos = JSON.stringify({ fecha: $scope.entity.fecha, iva: $scope.entity.iva, id_usuario: $scope.entity.id_usuario, pagado: $scope.entity.pagado  });
            ajaxService.ajaxUpdate($scope.entityName, $scope.entity.id, datos).then(function (response) {
                $scope.status.success = "La " + $scope.entityName + " con id " + $scope.id + " ha sido guardada."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);
