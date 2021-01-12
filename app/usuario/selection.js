miModulo.component('usuarioselection', {
  templateUrl: 'app/usuario/selection.html',
  bindings: {
    obj: '='
  },
  controller: addModalVarController
});

function addModalVarController($scope, ajaxService, iconService, titleService, commonService) {
  var self = this;

  $scope.operation = "selection";
  $scope.entity = "usuario";
  $scope.iconService = iconService;
  $scope.titleService = titleService;

  $scope.status = { success: "", error: "" };

  $scope.neighbourhood = 2;

  $scope.page = 1;
  $scope.rpp = 10;
  $scope.orderField = "id";
  $scope.orderDirection = "asc";

  $scope.recarga = function (page, rpp, orderField, orderDirection) {
    ajaxService.ajaxPlist($scope.entity, page, rpp, orderField, orderDirection).then(function (response) {
      $scope.page = page;
      $scope.rpp = rpp;
      $scope.orderField = orderField;
      $scope.orderDirection = orderDirection;
      if ($scope.page > response.data.totalPages) {
        $scope.page = response.data.totalPages;
        ajaxService.ajaxPlist($scope.entity, $scope.page, rpp, orderField, orderDirection).then(function (response) {
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
  }

  $scope.seleccionar = function (identificator) {
    ajaxService.ajaxGet($scope.entity, identificator).then(function (response) {
      self.obj = response.data;
    }).catch(function (error) {
      $scope.status.error = "Error de comunicación con el servidor.";
    });
  }

  $scope.recarga($scope.page, $scope.rpp, $scope.orderField, $scope.orderDirection);
}
