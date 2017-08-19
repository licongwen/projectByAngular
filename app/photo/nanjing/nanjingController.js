angular.module('app')
	.controller('nanjingController',['$scope','$rootScope',function($scope,$rootScope){
			$rootScope.account=window.sessionStorage.getItem('account');
			$('#dg-container').gallery();
	}])