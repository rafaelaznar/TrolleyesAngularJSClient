miModulo.controller("compraEditController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    function ($scope, auth, $location, ajaxService, $routeParams) {
        $scope.controller = "compraEditController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-edit";
        $scope.operationName = "Edición de ";
        $scope.entityName = "compra";
        $scope.entityIcon = "fas fa-cash-register";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.id = $routeParams.id;

        ajaxService.ajaxGet($scope.entityName, $scope.id).then(function (response) {
            $scope.entity = response.data;            
            //Obtenemos la fecha desde el response
            var initialDate = response.data.fecha;
            //Dividimos la fecha primero utilizando el espacio para obtener solo la fecha y el tiempo por separado
            var splitDate= initialDate.split(" ");
            var date=splitDate[0].split("/");
            var time=splitDate[1].split(":");
            //Guardamos los datos de cada array por separado
            var dd=date[0];
            var mm=date[1];
            var yyyy =date[2];
            var hh=time[0];
            var min=time[1];
            $scope.fecha = moment(new Date(yyyy,mm,dd,hh,min));

        }).catch(function (error) {
            $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
        });

        $scope.save = function () {
            var datos = JSON.stringify({
                cantidad: $scope.entity.cantidad, 
                precio: $scope.entity.precio,
                fecha: moment($scope.fecha).format("DD/MM/YYYY hh:mm"),
                descuento_usuario: $scope.entity.descuento_usuario, 
                descuento_producto: $scope.entity.descuento_producto, 
                id_producto: $scope.entity.id_producto, id_factura: 
                $scope.entity.id_factura
            });
            ajaxService.ajaxUpdate($scope.entityName, $scope.entity.id, datos).then(function (response) {
                $scope.status.success = "La" + $scope.entityName + " con id " + $scope.id + " ha sido guardado."
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido guardar.";
            });
        }

        $scope.back = function () {
            window.history.back();
        };
    },
]);
