miModulo.controller("carritoxproductoPlistController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "iconService", "titleService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, titleService) {
        $scope.controller = "carritoxproductoPlistController";
        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "plist";
        $scope.entity = "compra";
        $scope.subEntity = "producto";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = {};
        $scope.status.success = "";
        $scope.status.error = "";

        $scope.neighbourhood = 2;
        $scope.producto = $routeParams.producto;

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

        ajaxService.ajaxPlistx($scope.entityName, $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection, "producto", $scope.producto).then(function (response) {
            $scope.entities = response.data;
            $scope.pages = response.data.totalPages;
            $scope.registers = response.data.totalElements;
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




    }])