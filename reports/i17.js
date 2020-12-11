miModulo.controller("i17ReportController", [
    "$scope",
    "auth",
    "$location",
    "iconService",
    "$http",
    "ajaxService",
    function ($scope, auth, $location, iconService, $http, ajaxService) {
        $scope.controller = "i17ReportController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("edit");
        $scope.operationName = "Informe de ";
        $scope.entityName = "i17";
        $scope.beautyName = "facturas por usuario";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        function search() {
            strRequest = "http://localhost:8082/factura/allxusuario/" + $scope.usuario.id;
            $http.get(strRequest).then(function (response) {
                $scope.entities = response.data;
            }).catch(function (error) {
                $scope.status.error = "ERROR: EL informe " + $scope.entityName + " NO se ha podido leer.";
            });
        }

        $scope.usuario = { id: "", nombre: "???", apellido1: "???", apellido2: "???" };
        $scope.entities = [];

        $scope.lookupUsuario = function () {
            ajaxService.ajaxGet("usuario", $scope.usuario.id).then(function (response) {
                $scope.usuario = response.data;
            }).catch(function (error) {
                $scope.usuario = { id: "", nombre: "???", apellido1: "???", apellido2: "???" };
            });
            search();
        }

        $scope.$watch("usuario.id", function(){
            if ($scope.usuario.id){
                search();
            }
        });

        $scope.print = function () {
            // crear el pdf ->rafa
            var doc = new jsPDF();
            //var doc = new jsPDF('p','pt','a4');
            // rellenar el pdf ->alumno/a 
            doc.setFontSize(30);
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
