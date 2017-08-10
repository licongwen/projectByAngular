angular.module('app')
	.controller('suzhouController',['$scope','$rootScope',function($scopr,$rootScope){
		$rootScope.account=window.sessionStorage.getItem('account');
	}])