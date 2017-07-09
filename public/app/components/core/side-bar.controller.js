(function() {
	"use strict";
	
	angular
		.module('schu-eng.core')
		.controller('SideBarController', SideBarController);

	SideBarController.$inject = ['$location'];
	function SideBarController($location) {
		var sbc = this;
		sbc.isActive = function(path) {
			return $location.path().indexOf(path) != -1;
		};
	}
})();