miModulo.controller("i05ReportController", [
    "$scope",
    "auth",
    "$location",
    "iconService",
    "$http",
    "ajaxService",
    function ($scope, auth, $location, iconService, $http, ajaxService) {
        $scope.controller = "i05ReportController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("edit");
        $scope.operationName = "Informe de ";
        $scope.entityName = "i05";
        $scope.beautyName = "facturas por usuario";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.registers = [
            { value: 10, label: "10" },
            { value: 100, label: "100" },
            { value: 1000, label: "1000" }
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
                strRequest = "http://localhost:8082/usuario/orderdescuento/10/" + $scope.direction.name;
            } else {
                if ($scope.max == 100) {
                    strRequest = "http://localhost:8082/usuario/orderdescuento/100/" + $scope.direction.name;
                } else {
                    strRequest = "http://localhost:8082/usuario/orderdescuento/1000/" + $scope.direction.name;
                }
            }
            $http.get(strRequest).then(function (response) {
                $scope.spinner = false;
                $scope.entities = response.data;
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
            doc.setFontSize(30);
            doc.text("Usuarios con " + $scope.orden + " descuento ", 30, 30);
            doc.setFontSize(12);
            doc.text("Id", 15, 50);
            doc.text("Nombre", 25, 50);
            doc.text("Primer Apellido", 50, 50);
            doc.text("Segundo Apellido", 85, 50);
            doc.text("Descuento", 130, 50);
            doc.setLineWidth(1);
            doc.line(10, 52, 180, 52);
            doc.setFontSize(10);
            cont = 0;
            for (let i = 0; i < $scope.entities.length; i++) {
                cont++;
                if (cont == 24) {
                    cont = 0
                    doc.addPage();
                    doc.setFontSize(30);
                    doc.text("Usuarios con " + $scope.orden + " descuento ", 30, 30);
                    doc.setFontSize(12);
                    doc.text("Id", 15, 50);
                    doc.text("Nombre", 25, 50);
                    doc.text("Primer Apellido", 50, 50);
                    doc.text("Segundo Apellido", 85, 50);
                    doc.text("Descuento", 130, 50);
                    doc.setLineWidth(1);
                    doc.line(10, 52, 180, 52);
                    doc.setFontSize(10);
                }
                const element = $scope.entities[i];
                y = cont * 10;
                doc.text(element.id.toString(), 15, 60 + y);
                doc.text(element.nombre, 25, 60 + y);
                doc.text(element.apellido1, 50, 60 + y);
                doc.text(element.apellido2, 85, 60 + y);
                doc.text(element.descuento.toString(), 130, 60 + y);
            }
            doc.save('i05-' + Math.floor(Math.random() * 100000));

        }


    }])
