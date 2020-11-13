miModulo.controller("tipoproductoPlistController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    function ($scope, auth, $location, ajaxService) {
        $scope.controller = "tipoproductoPlistController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-edit";
        $scope.operationName = "Listado de ";
        $scope.entityName = "tipoproducto";             
        $scope.entityIcon = "fas fa-cubes";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.page = 0;
        $scope.rpp = 10;
        $scope.orderField = "id";
        $scope.orderDirection = "asc";

        ajaxService.ajaxPlist($scope.entityName, $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection).then(function (response) {
            $scope.entities = response.data;
        }).catch(function (error) {
            $scope.status.error = "ERROR: Los " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
        });



    }])