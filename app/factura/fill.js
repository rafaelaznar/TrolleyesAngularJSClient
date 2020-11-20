miModulo.controller("facturaFillController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    function ($scope, auth, $location, ajaxService, $routeParams) {
        $scope.controller = "facturaFillController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-plus";
        $scope.operationName = "Auto relleno de ";
        $scope.entityName = "factura";
        $scope.entityIcon = "fas fa-file-invoice-dollar";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.crear = function (numero) {

            ajaxService.ajaxFill($scope.entityName, numero).then(function (response) {
                $scope.status.success = "Se han creado " + numero + " " + $scope.entityName + "s correctamente."

            }).catch(function (error) {
                $scope.status.error = "ERROR: No se han podido crear los datos en " + $scope.entityName;
            });

        }

        $scope.back = function () {
            window.history.back();
        };


    }])