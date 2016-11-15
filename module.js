angular.module('myApp', [])
	.constant('SOMETHING', 'I dont get it')
	.controller('myCtrl', function(SOMETHING, $scope) {
		$scope.something = SOMETHING;
		var vm = this;
		vm.title = 'What did I do with the constant?'
	});