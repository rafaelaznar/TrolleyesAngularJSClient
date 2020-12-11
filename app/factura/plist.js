miModulo.controller("facturaPlistController", [
    "$scope",
    "auth",
    "$location",
    "ajaxService",
    "$routeParams",
    "iconService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService) {
        $scope.controller = "facturaPlistController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }
        $scope.operationIcon = iconService.getIcon("edit");
        $scope.operationName = "Listado de ";
        $scope.entityName = "factura";
        $scope.entityIcon = iconService.getIcon($scope.entityName);
        $scope.iconService = iconService;

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
                    doc.setFontSize(30); 
                    doc.text("Factura", 80, 15);
                    doc.setFontSize(11);
                    doc.text("Fecha: ", 10, 25);     
                    doc.text($scope.facturaEntity.fecha, 25, 25);
                    doc.text("Cliente: ", 10, 35);
                    doc.text($scope.facturaEntity.usuario.apellido1, 25, 35);
                    doc.text($scope.facturaEntity.usuario.apellido2, 40, 35);
                    doc.text($scope.facturaEntity.usuario.nombre, 60, 35);
                    doc.text("DNI/NIE: ", 10, 45);
                    doc.text($scope.facturaEntity.usuario.dni, 30, 45);
                    doc.text("Email :", 10, 55);
                    doc.text($scope.facturaEntity.usuario.email, 25, 55);
                    //doc.addImage("img/trolleyes100.png", "PNG", 90, 20, 100, 100);
                    doc.text("Nombre", 10, 70);
                    doc.text("Precio", 110, 70);
                    doc.text("Cantidad", 130, 70);
                    doc.text( "Subtotal", 150, 70);
                    let subtotal = 0;
                    let y;
                    for (let i = 0; i < $scope.compraEntities.content.length; i++) {
                        const element = $scope.compraEntities.content[i];
                        y = i * 10;
                        subtotal += element.cantidad * element.producto.precio;
                        doc.line(10, 75 + y, 200, 75 + y)
                        doc.text(element.producto.nombre, 10, 80 + y);
                        doc.line(10, 75 + y, 200, 75 + y)
                        doc.text(element.producto.precio.toString(), 110, 80 + y);
                        doc.line(10, 75 + y, 200, 75 + y)
                        doc.text(element.cantidad.toString(), 130, 80 + y);
                        doc.line(10, 75 + y, 200, 75 + y)
                        doc.text(((element.cantidad * element.producto.precio).toFixed(2)).toString(), 150, 80 + y);
                        doc.line(10, 75 + y, 200, 75 + y)

                    }
                    doc.line(90, 65+y, 180, 65+y)
                    doc.text("Total a pagar", 110, 90+y);
                    doc.text(subtotal.toFixed(2).toString(), 150, 90+y);

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