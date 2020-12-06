miModulo.controller("tipousuarioNewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "iconService",
    function($scope, auth, $location, ajaxService, iconService) {
        $scope.controller = "tipousuarioNewController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("new");
        $scope.operationName = "Alta de ";
        $scope.entityName = "tipousuario";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function() {
            var datos = JSON.stringify({
                nombre: $scope.entity.nombre
            });
            ajaxService
                .ajaxNew($scope.entityName, datos)
                .then(function(response) {
                    $scope.status.success =
                        "El " +
                        $scope.entityName +
                        " " +
                        $scope.entity.nombre +
                        " ha sido guardado.";
                })
                .catch(function(error) {
                    $scope.status.error =
                        "ERROR: El " +
                        $scope.entityName +
                        " con id " +
                        $scope.id +
                        " NO se ha podido leer.";
                });
        };

        $scope.back = function() {
            window.history.back();
        };
    },
]);