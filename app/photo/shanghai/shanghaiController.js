angular.module('app')
	.controller('shanghaiController',['$scope','$rootScope',function($scope,$rootScope){
			$rootScope.account=window.sessionStorage.getItem('account');
			$('#dg-container').gallery();
	}])