miModulo.component('datesselection', {
    templateUrl: 'component/datesSelection.html',
    bindings: {
        date1: '=',
        date2: '='
    },
    controller: addModalVarController,
    controllerAs: 'c'
});
function addModalVarController($scope) {


}