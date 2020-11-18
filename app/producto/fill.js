miModulo.controller("productoFillController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    function ($scope, auth, $location, ajaxService, $routeParams) {
        $scope.controller = "productoFillController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-plus";
        $scope.operationName = "Auto relleno de ";
        $scope.entityName = "producto";
        $scope.entityIcon = "fas fa-gift";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function (amount) {

        ajaxService.ajaxFill($scope.entityName, amount).then(function (response) {
            $scope.status.success = "Se han creado " + amount + " " + $scope.entityName + "s correctamente."
            
        }).catch(function (error) {
            $scope.status.error = "ERROR: No se han podido crear los datos en " + $scope.entityName;
        });

        $scope.back = function () {
            window.history.back();
          };

    }   


    }])