miModulo.controller("i17ReportController", [
    "$scope",
    "auth",
    "$location",
    "iconService",
    "$http",
    "ajaxService",
    "configService",
    "titleService",
    function ($scope, auth, $location, iconService, $http, ajaxService, configService, titleService) {
        $scope.controller = "i17ReportController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "report_facturas_x_usuario";
        $scope.entity = "usuario";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        /*
        $scope.operationIcon = iconService.getIcon("edit");
        $scope.operationName = "Informe de ";
        $scope.entityName = "i17";
        $scope.beautyName = "facturas por usuario";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;
        */

        $scope.status = { success: "", error: "" };

        var fini = new Date();
        //fini.setYear(fini.getYear() - 1);
        $scope.fecha1 = moment(fini, 'DD/MM/YYYY HH:mm');
        $scope.fecha2 = moment(new Date(), 'DD/MM/YYYY HH:mm');

        $scope.registers = [
            { value: 10, label: "10" },
            { value: 100, label: "100" },
            { value: 1000, label: "1000" }
        ];

        $scope.max = 10;

        function search() {
            if ($scope.max == 10) {
                strRequest = configService.getServerURL() + "factura/allxusuario/10/" + $scope.usuario.id + "/" + moment($scope.fecha1).format("DD-MM-YYYY") + "/" + moment($scope.fecha2).format("DD-MM-YYYY") + "";
            } else {
                if ($scope.max == 100) {
                    strRequest = configService.getServerURL() + "factura/allxusuario/100/" + $scope.usuario.id + "/" + moment($scope.fecha1).format("DD-MM-YYYY") + "/" + moment($scope.fecha2).format("DD-MM-YYYY") + "";
                } else {
                    strRequest = configService.getServerURL() + "factura/allxusuario/1000/" + $scope.usuario.id + "/" + moment($scope.fecha1).format("DD-MM-YYYY") + "/" + moment($scope.fecha2).format("DD-MM-YYYY") + "";
                }
            }
            $http.get(strRequest).then(function (response) {
                $scope.entities = response.data;
            }).catch(function (error) {
                $scope.status.error = "ERROR: EL informe " + $scope.entityName + " NO se ha podido leer.";
            });
        }

        //$scope.usuario = { id: "", nombre: "???", apellido1: "???", apellido2: "???" };
        $scope.entities = [];

        $scope.$watch("usuario.id", function () {
            preSearch();
        });

        $scope.$watch("max", function () {
            preSearch();
        });

        $scope.$watch("fecha1", function () {
            preSearch();
        })

        $scope.$watch("fecha2", function () {
            preSearch();
        })

        function preSearch() {
            $scope.entities = [];
            if ($scope.usuario && $scope.usuario.id && $scope.max && $scope.fecha1 && $scope.fecha2) {
                search();
            }
        };

        $scope.print = function () {
            // crear el pdf ->rafa
            var doc = new jsPDF();
            //var doc = new jsPDF('p','pt','a4');
            // rellenar el pdf ->alumno/a 
            doc.setFontSize(15);
            doc.text("Facturas del usuario " + $scope.usuario.nombre + " " + $scope.usuario.apellido1 + " " + $scope.usuario.apellido2, 80, 15);
            doc.setFontSize(11);
            for (let i = 0; i < $scope.entities.length; i++) {
                const element = $scope.entities[i];
                y = i * 10;
                doc.line(10, 75 + y, 200, 75 + y)
                doc.text(element.fecha, 10, 80 + y);
                doc.line(10, 75 + y, 200, 75 + y)
                doc.text(element.iva.toString(), 110, 80 + y);
                doc.line(10, 75 + y, 200, 75 + y)
                doc.text(element.pagado.toString(), 130, 80 + y);
                doc.line(10, 75 + y, 200, 75 + y)
                doc.text(element.compras.toString(), 150, 80 + y);
                doc.line(10, 75 + y, 200, 75 + y)
            }
            doc.line(90, 65 + y, 180, 65 + y)
            // mostrar el pdf ->rafa
            doc.save('i17-' + Math.floor(Math.random() * 100000));

        }


    }])
