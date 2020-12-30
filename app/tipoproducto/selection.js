miModulo.component('tipoproductoselection', {
    templateUrl: 'app/tipoproducto/selection.html',
    bindings: {
        obj: '='
    },
    controller: addModalVarController
});
function addModalVarController($scope, ajaxService, iconService, titleService) {
    var self = this;

    $scope.entity = "tipoproducto";
    $scope.iconService = iconService;
    $scope.titleService = titleService;

    $scope.status = {};
    $scope.status.success = "";
    $scope.status.error = "";

    $scope.neighbourhood = 2;

    $scope.page = 1;
    $scope.rpp = 10;
    $scope.orderField = "id";
    $scope.orderDirection = "asc";

    $scope.recarga = function (page, rpp, orderField, orderDirection) {
        ajaxService.ajaxPlist($scope.entity, page, rpp, orderField, orderDirection).then(function (response) {
            $scope.entities = response.data;
            $scope.pages = response.data.totalPages;
            $scope.page = page;
            $scope.rpp = rpp;
            $scope.orderField = orderField;
            $scope.orderDirection = orderDirection;
            paginacion();
        }).catch(function (error) {
            $scope.status.error = "ERROR: Los " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
        });
    }

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
    $scope.seleccionar = function (identificator) {
        ajaxService.ajaxGet($scope.entity, identificator).then(function (response) {
            self.obj = response.data;
        }).catch(function (error) {
            $scope.status.error = "ERROR: El " + $scope.entity + " con id " + $scope.id + " NO se ha podido leer.";
        });
    }

    $scope.recarga($scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection);


}