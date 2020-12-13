miModulo.component('datesselection', {
    templateUrl: 'component/datesSelection.html',
    bindings: {
        date1: '=',
        date2: '='
    },
    controller: addModalVarController
});
function addModalVarController($scope, ajaxService, iconService) {
    var self = this;

    $scope.entityName = "tipoproducto";
    $scope.iconService = iconService;

    $scope.status = {};
    $scope.status.success = "";
    $scope.status.error = "";





}