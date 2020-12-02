miModulo.controller("productoFillController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    "iconService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService) {
        $scope.controller = "productoFillController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("new");
        $scope.operationName = "Auto relleno de ";
        $scope.entityName = "producto";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

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