miModulo.controller("i04ReportController", [
    "$scope",
    "auth",
    "$location",
    "iconService",
    "$http",
    "ajaxService",
    function ($scope, auth, $location, iconService, $http, ajaxService) {
        $scope.controller = "i04ReportController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("edit");
        $scope.operationName = "Informe de ";
        $scope.entityName = "i04";
        $scope.beautyName = "facturas por usuario";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.registers = [
            { value: 10, label: "10" },
            { value: 50, label: "50" },
            { value: 100, label: "100" }
        ];

        $scope.direction = {
            name: 'desc'
        };

        $scope.max = 10;
        $scope.entities = [];
        $scope.spinner = false;

        $scope.search = function () {
            $scope.spinner = true;
            if ($scope.max == 10) {
                strRequest = configService.getServerURL() + "producto/orderdescuento/10/" + $scope.direction.name;
            } else {
                if ($scope.max == 50) {
                    strRequest = configService.getServerURL() + "producto/orderdescuento/50/" + $scope.direction.name;
                } else {
                    strRequest = configService.getServerURL() + "producto/orderdescuento/100/" + $scope.direction.name;
                }
            }
            $http.get(strRequest).then(function (response) {
                $scope.entities = response.data;
                $scope.spinner = false;
            }).catch(function (error) {
                $scope.spinner = false;
                $scope.status.error = "ERROR: EL informe " + $scope.entityName + " NO se ha podido leer.";
            });
            if ($scope.direction.name === 'desc') {
                $scope.orden = 'mayor'
            } else {
                $scope.orden = 'menor'
            }
        }

        $scope.print = function () {
            var doc = new jsPDF();
            //var doc = new jsPDF('p','pt','a4');
            doc.setFontSize(30);
            doc.text("Productos con " + $scope.orden + " descuento ", 35, 30);
            doc.setFontSize(12);
            doc.text("Id", 15, 70);
            doc.text("Nombre", 25, 70);
            doc.text("Precio", 130, 70);
            doc.text("Descuento", 150, 70);
            doc.setLineWidth(1);
            doc.line(10, 72, 180, 72);
            doc.setFontSize(10);
            for (let i = 0; i < $scope.entities.length; i++) {
                const element = $scope.entities[i];
                y = i * 10;
                doc.text(element.id.toString(), 15, 80 + y);
                doc.text(element.nombre, 25, 80 + y);
                doc.text(element.precio.toString(), 130, 80 + y);
                doc.text(element.descuento.toString(), 160, 80 + y);
            }
            // mostrar el pdf ->rafa
            doc.save('i04-' + Math.floor(Math.random() * 100000));

        }


    }])
