//register main module
var app = angular.module('Edit', []);

//register controller
app.controller('MainController', [ '$scope', function($scope) {

	// $scope is a special object that makes
	// its properties available to the view as
	// variables.
	$scope.value = 'Click to edit';

	//$scope.showtooltip = false
	

	//toggle tooltip visibility 
	$scope.toggleTooltip = function (e) {
		e.stopPropagation();
		//showtooltip = oposite of what it is at the moment
		//if true "!" will make it false and vice versa 
		$scope.showtooltip = !$scope.showtooltip;
	};
}]);