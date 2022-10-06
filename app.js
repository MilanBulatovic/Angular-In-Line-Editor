//register main module
var app = angular.module('Edit', []);

//register controller
app.controller('MainController', [ '$scope', function($scope) {

		$scope.value = 'Click to edit';
		// $scope is a special object that makes
		// its properties available to the view as
		// variables.
		//$scope.showtooltip = false;

		// Some helper functions that will be
		// available in the angular declarations
		

		//toggle tooltip visibility 
		$scope.toggleTooltip = function (e) {
			e.stopPropagation();
			//showtooltip = oposite of what it is at the moment
			//if true "!" will make it false and vice versa 
			$scope.showtooltip = !$scope.showtooltip;
		};
	}]);