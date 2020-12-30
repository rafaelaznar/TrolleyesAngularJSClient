miModulo.controller("HomeController", [
    "$scope", "auth", "ajaxService", "$routeParams", "iconService", "titleService", "configService",
    function ($scope, auth, ajaxService, $routeParams, iconService, titleService, configService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        }

        $scope.operation = "home";
        $scope.entity = "system";
        $scope.iconService = iconService;
        $scope.titleService = titleService;
        $scope.configService = configService;

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

        ajaxService.ajaxPlist("producto", $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection).then(function (response) {
            $scope.entities = response.data;
            $scope.pages = response.data.totalPages;
            $scope.registers = response.data.totalElements;
            paginacion();
        }).catch(function (error) {
            $scope.status.error = "Error de comunicación con el servidor.";
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