miModulo.controller("usuarioPlistController", [
    "$scope", "auth", "$location", "ajaxService", "$routeParams", "iconService", "titleService", "commonService",
    function ($scope, auth, $location, ajaxService, $routeParams, iconService, titleService, commonService) {

        if (auth.data.status == 200) {
            $scope.datosDeSesion = auth.data;
        } else {
            $location.path("/home");
        }

        $scope.operation = "plist";
        $scope.entity = "usuario";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

        $scope.status = { success: "", error: "" };

        $scope.page = commonService.getPage($routeParams.page);
        $scope.rpp = commonService.getRpp($routeParams.rpp);
        $scope.orderField = commonService.getOrderfield($routeParams.orderfield);
        $scope.orderDirection = commonService.getOrderdirection($routeParams.orderdirection);

        ajaxService.ajaxPlist($scope.entity, $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection).then(function (response) {
            $scope.entitiesData = response.data;
            $scope.pages = response.data.totalPages;
            if ($scope.page > $scope.pages) {
                $scope.page = $scope.pages;
                ajaxService.ajaxPlist($scope.entity, $scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection).then(function (response) {
                    $scope.entitiesData = response.data;
                    $scope.pages = response.data.totalPages;
                }).catch(function (error) {
                    $scope.status.error = "ERROR: Los " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
                });
            }
            $scope.registers = response.data.totalElements;
            $scope.botonera = commonService.pagination($scope.pages, $scope.page);
        }).catch(function (error) {
            $scope.status.error = "ERROR: Los " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
        });

    }])