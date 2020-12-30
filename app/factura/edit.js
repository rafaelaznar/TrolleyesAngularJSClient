miModulo.controller("facturaEditController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "dateService", "iconService", "titleService",
    function ($scope, auth, $location, ajaxService, $routeParams, dateService, iconService, titleService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "edit";
        $scope.entity = "factura";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.id = $routeParams.id;

        ajaxService.ajaxGet($scope.entity, $scope.id).then(function (response) {
            $scope.entityData = response.data;
            $scope.fecha = dateService.getDate(response.data.fecha);
        }).catch(function (error) {
            $scope.status.error = "ERROR: La " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
        });

        $scope.save = function () {
            var datos = JSON.stringify({
                fecha: moment($scope.fecha).format("DD/MM/YYYY hh:mm"),
                iva: $scope.entityData.iva,
                usuario: { id: parseInt($scope.entityData.usuario.id) },
                pagado: $scope.entityData.pagado
            });
            ajaxService.ajaxUpdate($scope.entity, $scope.entityData.id, datos).then(function (response) {
                $scope.status.success = "La " + $scope.entity + " con id " + $scope.id + " ha sido guardada."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);
