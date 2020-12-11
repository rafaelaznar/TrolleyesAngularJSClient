miModulo.controller("productoEditController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    "iconService",
    "$http",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, $http) {
        $scope.controller = "productoEditController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("edit");
        $scope.operationName = "Edición de ";
        $scope.entityName = "producto";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.id = $routeParams.id;

        ajaxService.ajaxGet($scope.entityName, $scope.id).then(function (response) {
            $scope.entity = response.data;
        }).catch(function (error) {
            $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
        });

        $scope.save = function () {

            //var formData = new FormData();



            //var file = $scope.imagen;
            //var file2 = new File([file], $scope.imagen, {
            //type: file.type
            //type: "image/jpg"
            //    type: undefined
            //});

            //var oFormData = new FormData();
            //oFormData.append('file', file2, $scope.imagen);
            //oFormData.append('type', type);
            //oFormData.append('file', $scope.imagen);


            var oFormData = new FormData(editForm);


            $http({
                headers: {
                    'Content-Type': undefined
                },
                method: 'POST',
                //transformRequest: angular.identity,
                //mimeType: "multipart/form-data",
                data: oFormData,
                url: "http://localhost:8082/file/upload"
            }).then(function (response) {
                var datos = JSON.stringify({ codigo: $scope.entity.codigo, nombre: $scope.entity.nombre, existencias: $scope.entity.existencias, precio: $scope.entity.precio, imagen: response.data, descuento: $scope.entity.descuento, tipoproducto: { "id": $scope.entity.tipoproducto.id, "nombre": $scope.entity.tipoproducto.nombre } });
                ajaxService.ajaxUpdate($scope.entityName, $scope.entity.id, datos).then(function (response) {
                    $scope.status.success = "La " + $scope.entityName + " con id " + $scope.id + " ha sido guardada."
                }).catch(function (error) {
                    $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
                });
            })
        }

        $scope.previewImage = null;

        $scope.SelectFile = function (e) {
            //notificar al form para que se actualice el botón submit
            var temp = $scope.editForm.$setDirty();
            $scope.$apply();
            //previsualizar imagen
            var reader = new FileReader();
            reader.onload = function (e) {
                $scope.previewImage = e.target.result;
                $scope.$apply();
            };
            reader.readAsDataURL(e.target.files[0]);
        };

        $scope.lookupTipoproducto = function () {
            ajaxService.ajaxGet("tipoproducto", $scope.entity.tipoproducto.id).then(function (response) {
                $scope.entity.tipoproducto = response.data;
            }).catch(function (error) {
                $scope.entity.tipoproducto = { id: "", nombre: "???" };
            });
        }
        $scope.back = function () {
            window.history.back();
        };
    },
]);
