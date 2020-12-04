miModulo.controller("facturaPlistController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    function ($scope, auth, $location, ajaxService, $routeParams) {
        $scope.controller = "facturaPlistController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = "fas fa-edit";
        $scope.operationName = "Listado de ";
        $scope.entityName = "factura";
        $scope.entityIcon = "fas fa-file-invoice-dollar";

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.neighbourhood = 2;

        if ($routeParams.page == undefined) {
            $scope.page = 1;
        } else {
            $scope.page = parseInt($routeParams.page);
        }

        if ($routeParams.rpp == undefined) {
            $scope.rpp = 10;
        } else {
            $scope.rpp = parseInt($routeParams.rpp);
        }

        if ($routeParams.orderfield == undefined) {
            $scope.orderField = "id";
        } else {
            $scope.orderField = $routeParams.orderfield;
        }

        if ($routeParams.orderdirection == undefined) {
            $scope.orderDirection = "asc";
        } else {
            $scope.orderDirection = $routeParams.orderdirection;
        }

        ajaxService.ajaxPlist($scope.entityName, $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection).then(function (response) {
            $scope.entities = response.data;
            $scope.pages = response.data.totalPages;
            paginacion();
        }).catch(function (error) {
            $scope.status.error = "ERROR: Los " + $scope.entityName + " con id " + $scope.id + " NO se ha podido leer.";
        });

        function paginacion() {
            $scope.botonera = [];
            for (i = 1; i <= $scope.pages; i++) {
                if (i == 1) {
                    $scope.botonera.push(i);
                } else if (i > ($scope.page - $scope.neighbourhood) && i < ($scope.page + $scope.neighbourhood)) {
                    $scope.botonera.push(i);
                } else if (i == $scope.pages) {
                    $scope.botonera.push(i);
                } else if (i == ($scope.page - $scope.neighbourhood) || i == ($scope.page + $scope.neighbourhood)) {
                    $scope.botonera.push('...');
                }
            }
        }

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