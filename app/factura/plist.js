miModulo.controller("facturaPlistController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "iconService", "titleService", "commonService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, titleService, commonService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "plist";
        $scope.entity = "factura";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = { success: "", error: "" };

        $scope.page = commonService.getPage($routeParams.page);
        $scope.rpp = commonService.getRpp($routeParams.rpp);
        $scope.orderField = commonService.getOrderfield($routeParams.orderfield);
        $scope.orderDirection = commonService.getOrderdirection($routeParams.orderdirection);

        ajaxService.ajaxPlist($scope.entity, $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection).then(function (response) {
            if ($scope.page > response.data.totalPages) {
                $scope.page = response.data.totalPages;
                ajaxService.ajaxPlist($scope.entity, $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection).then(function (response) {
                    $scope.entitiesData = response.data;
                    $scope.pages = response.data.totalPages;
                    $scope.registers = response.data.totalElements;
                    $scope.botonera = commonService.pagination($scope.pages, $scope.page);
                }).catch(function (error) {
                    $scope.status.error = "Error de comunicación con el servidor.";
                });
            } else {
                $scope.entitiesData = response.data;
                $scope.pages = response.data.totalPages;
                $scope.registers = response.data.totalElements;
                $scope.botonera = commonService.pagination($scope.pages, $scope.page);
            }
        }).catch(function (error) {
            $scope.status.error = "Error de comunicación con el servidor.";
        });

        $scope.printFactura = function (id) {
            // pedir los datos de la factura -> rafa
            ajaxService.ajaxGet($scope.entity, id).then(function (response) {
                $scope.facturaEntity = response.data;
                // pedir las compras de la factura ->rafa
                ajaxService.ajaxAllx("compra", "factura", id).then(function (response) {
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
                    doc.text("Subtotal", 150, 70);
                    let subtotal = 0;
                    let y;
                    for (let i = 0; i < $scope.compraEntities.length; i++) {
                        const element = $scope.compraEntities[i];
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
                    doc.line(90, 65 + y, 180, 65 + y)
                    doc.text("Total a pagar", 110, 90 + y);
                    doc.text(subtotal.toFixed(2).toString(), 150, 90 + y);

                    // mostrar el pdf ->rafa
                    doc.save('Factura' + Math.floor(Math.random() * 100000))
                }).catch(function (error) {
                    $scope.status.error = "ERROR: Las compras de la " + $scope.entity + " con id " + id + " NO se ha podido leer.";
                });
            }).catch(function (error) {
                $scope.status.error = "ERROR: La " + $scope.entity + " con id " + id + " NO se ha podido leer.";
            });
        }


    }])