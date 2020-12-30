miModulo.controller("usuarioNewController", [
    "$scope", "auth", "$location", "ajaxService", "iconService", "titleService", "regexService",
    function ($scope, auth, $location, ajaxService, iconService, titleService, regexService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "new";
        $scope.entity = "usuario";
        $scope.iconService = iconService;
        $scope.titleService = titleService;
        $scope.regexService = regexService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.save = function () {
            var datos = JSON.stringify({
                dni: $scope.entityData.dni,
                nombre: $scope.entityData.nombre,
                apellido1: $scope.entityData.apellido1,
                apellido2: $scope.entityData.apellido2,
                login: $scope.entityData.login,
                password: $scope.entityData.password,
                email: $scope.entityData.email,
                descuento: parseFloat($scope.entityData.descuento),
                tipousuario: { "id": $scope.entityData.tipousuario.id }
            });
            ajaxService.ajaxNew($scope.entity, datos).then(function (response) {
                $scope.entityData = response.data;
                $scope.status.success = "El " + $scope.entity + " ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: El " + $scope.entity + " NO se ha podido leer.";
            });
        }

        $scope.lookupTipousuario = function () {
            ajaxService.ajaxGet("tipousuario", $scope.entityData.tipousuario.id).then(function (response) {
                $scope.entityData.tipousuario = response.data;
            }).catch(function (error) {
                $scope.entityData.tipousuario = { id: "", nombre: "???" };
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);