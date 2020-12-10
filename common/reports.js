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
        $scope.operationIcon = iconService.getIcon("printFiles");
        $scope.operationName = "Listado de ";
        $scope.entityName = "informes";
        $scope.entityIcon = iconService.getIcon("printHerramientas");
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.informes = [
            { nombre: "Productos más vendidos entre dos fechas", codigo: "i01" },
            { nombre: "Productos más vendidos entre dos fechas", codigo: "i02" },
            { nombre: "Productos menos vendidos entre dos fechas", codigo: "i03" },
            { nombre: "Productos menos vendidos entre dos fechas", codigo: "i04" },
            { nombre: "Tipos de producto más vendidos entre dos fechas", codigo: "i05" },
            { nombre: "Tipos de producto más vendidos entre dos fechas", codigo: "i06" },
            { nombre: "Clientes que más compran entre dos fechas", codigo: "i07" },
            { nombre: "Clientes que más compran entre dos fechas", codigo: "i08" },
            { nombre: "Clientes que menos compran entre dos fechas", codigo: "i09" },
            { nombre: "Clientes que menos compran entre dos fechas", codigo: "i10" },
            { nombre: "Productos con más descuento", codigo: "i11" },
            { nombre: "Productos con más existencias", codigo: "i12" },
            { nombre: "Productos con menos existencias", codigo: "i13" },
            { nombre: "Facturas de más importe", codigo: "i14" },
            { nombre: "Facturas de menos importe", codigo: "i15" },
            { nombre: "Clientes con mas descuento", codigo: "i16" },
            { nombre: "Facturas de un cliente", codigo: "i17" },
            { nombre: "Facturas de un producto", codigo: "i18" },
            { nombre: "Productos que más compra un cliente", codigo: "i19" },
            { nombre: "Clientes que más compran un producto", codigo: "i20" },
            { nombre: "Productos que más compra un cliente", codigo: "i21" },
            { nombre: "Clientes que más compran un producto", codigo: "i22" }
        ];

        $scope.printInforme = function (id) {
            switch (id) {
                case 1:
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
                        $scope.status.error = "ERROR: El informe con id " + id + " NO se ha podido mostrar.";
                    });
                    break;
                default:
                    $scope.status.error = "ERROR: El informe con id " + id + " no existe.";
            }
        }


    }])