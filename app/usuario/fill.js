miModulo.controller("usuarioFillController", [
	"$scope",
	"auth",
	"$location",
	"ajaxService",
	"iconService",
	function ($scope, auth, $location, ajaxService, iconService) {
		$scope.controller = "usuarioFillController";
		if (auth.data.status == 200) {
			$scope.datosDeSesion = auth.data;
		} else {
			$location.path("/home");
		}
		$scope.operationIcon = iconService.getIcon("new");
		$scope.operationName = "Auto relleno de ";
		$scope.entityName = "usuario";
		$scope.entityIcon = iconService.getIcon($scope.entityName);
		$scope.iconService = iconService;

		$scope.status = {};
		$scope.status.success = "";
		$scope.status.error = "";

		$scope.crear = function (numero) {
			ajaxService.ajaxFill($scope.entityName, numero).then(function (response) {
				$scope.status.success = "Se creo " + numero + " " + $scope.entityName + "s correctamente."
			}, function () {
				$scope.status.error = "ERROR: No se pudo crear los datos en " + $scope.entityName;
			});
		}

		$scope.back = function () {
			window.history.back();
		};
	},
]);