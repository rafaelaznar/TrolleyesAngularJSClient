miModulo.controller("tipousuarioEditController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "iconService", "titleService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, titleService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "edit";
        $scope.entity = "tipousuario";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.id = $routeParams.id;

        ajaxService.ajaxGet($scope.entity, $scope.id).then(function (response) {
            $scope.entityData = response.data;
        }).catch(function (error) {
            $scope.status.error = "ERROR: El " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
        });

        $scope.save = function () {
            var datos = JSON.stringify({ nombre: $scope.entity.nombre });
            ajaxService.ajaxUpdate($scope.entity, $scope.entity.id, datos).then(function (response) {
                $scope.status.success = "El " + $scope.entity + " con id " + $scope.id + " ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: El " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);
