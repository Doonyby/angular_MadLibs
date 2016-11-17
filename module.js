angular.module('myApp', ['ngMessages'])
	.controller('myCtrl', function() {
		var vm = this;
		vm.screenSwitch = false;
		vm.redBox = false;
		vm.submit = function() {
			if( vm.myForm.$valid ) {
				console.log('form is valid');
			    vm.screenSwitch = true;
			} else {
				console.log('form is not valid');
				vm.redBox = true;
			    vm.screenSwith = false;
			}
		};
		vm.resetMadLib = function() {
			vm.myForm.$setPristine();
			console.log('resetting mad lib');
			vm.screenSwitch = false;
			vm.redBox = false;
			vm.femaleName = '';
			vm.jobTitle = '';
			vm.tediousTask = '';
			vm.dirtyTask = '';
			vm.celebrity = '';
			vm.uselessSkill = '';
			vm.obnoxious = '';
			vm.hugeNumber = '';
			vm.adjective = '';
		};

	});
