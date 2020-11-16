miModulo.controller("usuarioNewController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    function ($scope, auth, $location, ajaxService) {
        $scope.controller = "usuarioNewController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-plus";
        $scope.operationName = "Alta de ";
        $scope.entityName = "usuario";
        $scope.entityIcon = "fas fa-user";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({ dni: $scope.entity.dni, nombre: $scope.entity.nombre, apellido1: $scope.entity.apellido1, 
                apellido2: $scope.entity.apellido2, login: $scope.entity.login, password: $scope.entity.password, email: $scope.entity.email, 
                descuento: $scope.entity.descuento, id_tipo_usuario: $scope.entity.id_tipousuario, token: $scope.entity.token,
                validado: $scope.entity.validado, activo: $scope.entity.activo});
            ajaxService.ajaxNew($scope.entityName, datos).then(function (response) {
                $scope.status.success = "El" + $scope.entityName + " ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: El " + $scope.entityName + " NO se ha podido leer.";
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);