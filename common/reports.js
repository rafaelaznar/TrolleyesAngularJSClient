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
            { nombre: "N Productos más o menos vendidos entre dos fechas", codigo: "i01" }, //raul
            { nombre: "N Tipos de producto más o menos vendidos entre dos fechas", codigo: "i02" }, //bea
            { nombre: "N Clientes que más o menos compran entre dos fechas", codigo: "i03" }, //carlos
            { nombre: "N Productos con más o menos descuento", codigo: "i04" }, //eugenio
            { nombre: "N Clientes con más o menos descuento", codigo: "i05" }, //jhonatan
            { nombre: "N Productos con más o menos existencias", codigo: "i06" }, //guillermo gomez
            { nombre: "N Facturas de más o menos importe entre dos fechas", codigo: "i07" },
            { nombre: "N Facturas de un producto entre dos fechas", codigo: "i08" }, //oscar
            { nombre: "N Productos que más compra un cliente entre dos fechas", codigo: "i09" }, //steven
            { nombre: "N Clientes que más compran un producto entre dos fechas", codigo: "i10" },
            { nombre: "N Productos que más compra un cliente entre dos fechas", codigo: "i11" },
            { nombre: "N Clientes que más compran un producto entre dos fechas", codigo: "i12" },
            { nombre: "", codigo: "i13" },
            { nombre: "", codigo: "i14" },
            { nombre: "", codigo: "i15" },
            { nombre: "", codigo: "i16" },
            { nombre: "N Facturas de un cliente entre dos fechas", codigo: "i17" },
            { nombre: "", codigo: "i18" },
            { nombre: "", codigo: "i19" },
            { nombre: "", codigo: "i20" },
            { nombre: "", codigo: "i21" },
            { nombre: "", codigo: "i22" }
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