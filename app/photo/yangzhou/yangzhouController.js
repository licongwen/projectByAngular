angular.module('app')
	.controller('yangzhouController',['$scope','$rootScope',function($scope,$rootScope){
			$rootScope.account=window.sessionStorage.getItem('account');
			$('#dg-container').gallery();
	}])