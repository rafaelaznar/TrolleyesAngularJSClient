miModulo.controller("HomeController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "iconService", "titleService", "configService", "commonService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, titleService, configService, commonService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        }

        $scope.operation = "home";
        $scope.entity = "system";
        $scope.iconService = iconService;
        $scope.titleService = titleService;
        $scope.configService = configService;

        $scope.status = { success: "", error: "" };

        $scope.page = commonService.getPage($routeParams.page);
        $scope.rpp = commonService.getRpp($routeParams.rpp);
        $scope.orderField = commonService.getOrderfield($routeParams.orderfield);
        $scope.orderDirection = commonService.getOrderdirection($routeParams.orderdirection);
        $scope.filter = commonService.getFilter($routeParams.filter);

        $scope.doFilter = function () {
            $location.path("/home/" + $scope.page + "/" + $scope.rpp + "/" + $scope.orderField + "/" + $scope.orderDirection + "/" + $scope.filter);
        }

        ajaxService.ajaxPlist("producto", $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection, $scope.filter).then(function (response) {
            if ($scope.page > response.data.totalPages) {
                $scope.page = response.data.totalPages;
                ajaxService.ajaxPlist("producto", $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection, $scope.filter).then(function (response) {
                    $scope.entitiesData = response.data;
                    $scope.pages = response.data.totalPages;
                    $scope.registers = response.data.totalElements;
                    $scope.botonera = commonService.pagination($scope.pages, $scope.page);
                }).catch(function (error) {
                    $scope.status.error = "Error de comunicación con el servidor";
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



        $scope.carritoAdd = function (id_producto) {
            ajaxService.ajaxCarritoAdd(id_producto, 1).then(function (response) {
                $scope.repuesta = response.data;
                return ajaxService.ajaxCheck();
            }).then(function (result) {
                $scope.datosDeSesion = result;
            }).catch(function (error) {
                $scope.status.error = "ERROR: No se ha podido añadir el producto " + producto + " al carrito.";
            });
        }

    }])