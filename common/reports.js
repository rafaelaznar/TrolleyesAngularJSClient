miModulo.controller("reportsListController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",    
    "iconService",
    function ($scope, auth, $location, ajaxService, iconService) {
        
        $scope.controller = "reportsListController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("printHerramientas");
        $scope.operationName = "Listado de ";
        $scope.entityName = "factura";
        $scope.entityIcon = iconService.getIcon("printHerramientas");
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.printFactura = function (id) {
            // pedir los datos de la factura -> rafa
            ajaxService.ajaxGet($scope.entityName, id).then(function (response) {
                $scope.facturaEntity = response.data;
                // pedir las compras de la factura ->rafa
                ajaxService.ajaxPlist("compra", "factura", id).then(function (response) {
                    $scope.compraEntities = response.data;
                    // crear el pdf ->rafa
                    var doc = new jsPDF();
                    //var doc = new jsPDF('p','pt','a4');
                    // rellenar el pdf ->alumno/a           
                    doc.text($scope.facturaEntity.fecha, 35, 25);                    
                    // mostrar el pdf ->rafa
                    doc.save('Factura' + Math.floor(Math.random() * 100000))
                }).catch(function (error) {
                    $scope.status.error = "ERROR: Las compras de la " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
                });
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
            });
        }


    }])