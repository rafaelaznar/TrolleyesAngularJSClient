miModulo.controller("compraFillController", [
	"$scope", "auth", "$location", "ajaxService", "iconService", "titleService",
	function ($scope, auth, $location, ajaxService, iconService, titleService) {
		$scope.controller = "compraFillController";
		if (auth.data.status == 200) {
			$scope.datosDeSesion = auth.data;
		} else {
			$location.path("/home");
		}

		$scope.operation = "fill";
        $scope.entity = "compra";
        $scope.iconService = iconService;
        $scope.titleService = titleService;

		$scope.status = {};
		$scope.status.success = "";
		$scope.status.error = "";

		$scope.crear = function (numero) {
			ajaxService.ajaxFill($scope.entity, numero).then(function (response) {
				$scope.status.success = "Se creo " + numero + " " + $scope.entity + "s correctamente."
			}, function () {
				$scope.status.error = "ERROR: No se pudo crear los datos en " + $scope.entity;
			});
		}

		$scope.back = function () {
			window.history.back();
		};
	},
]);