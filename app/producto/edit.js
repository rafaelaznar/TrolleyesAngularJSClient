miModulo.controller("productoEditController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "iconService", "$http", "titleService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, $http, titleService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "edit";
        $scope.entity = "producto";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.id = $routeParams.id;

        ajaxService.ajaxGet($scope.entity, $scope.id).then(function (response) {
            $scope.entityData = response.data;
        }).catch(function (error) {
            $scope.status.error = "ERROR: La " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
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
                var datos = JSON.stringify({ codigo: $scope.entityData.codigo, nombre: $scope.entityData.nombre, existencias: $scope.entityData.existencias, precio: $scope.entityData.precio, imagen: response.data, descuento: $scope.entityData.descuento, tipoproducto: { "id": $scope.entityData.tipoproducto.id, "nombre": $scope.entityData.tipoproducto.nombre } });
                ajaxService.ajaxUpdate($scope.entity, $scope.entityData.id, datos).then(function (response) {
                    $scope.status.success = "La " + $scope.entity + " con id " + $scope.id + " ha sido guardada."
                }).catch(function (error) {
                    $scope.status.error = "ERROR: La " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
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
            ajaxService.ajaxGet("tipoproducto", $scope.entityData.tipoproducto.id).then(function (response) {
                $scope.entityData.tipoproducto = response.data;
            }).catch(function (error) {
                $scope.entityData.tipoproducto = { id: "", nombre: "???" };
            });
        }
        $scope.back = function () {
            window.history.back();
        };
    },
]);
