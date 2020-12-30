miModulo.controller("usuarioRemoveController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "iconService", "titleService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, titleService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "remove";
        $scope.entity = "usuario";
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

        $scope.remove = function () {
            ajaxService.ajaxRemove($scope.entity, $scope.id).then(function (response) {
                $scope.status.success = "El " + $scope.entity + " con id " + $scope.id + " se ha borrado.";
            }).catch(function (error) {
                $scope.status.error = "ERROR: El " + $scope.entity + " con id " + $scope.id + " NO se ha podido borrar.";
            });
        };

        $scope.back = function () {
            window.history.back();
        };
    },
]);
