miModulo.controller("productoFillController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    "iconService",
    "titleService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, titleService) {
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "fill";
        $scope.entity = "producto";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.crear = function (numero) {
            ajaxService.ajaxFill($scope.entity, numero).then(function (response) {
                $scope.status.success = "Se han creado " + numero + " " + $scope.entity + "s correctamente."
            }).catch(function (error) {
                $scope.status.error = "ERROR: No se han podido crear los datos en " + $scope.entity;
            });
        }

        $scope.back = function () {
            window.history.back();
        };

    }])