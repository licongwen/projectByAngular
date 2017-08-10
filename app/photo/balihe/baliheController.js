angular.module('app')
	.controller('baliheController',['$scope','$rootScope',function($scope,$rootScope){
		$rootScope.account=window.sessionStorage.getItem('account');
	}])