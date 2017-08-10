angular.module('app')
	.controller('lianyungangController',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
			$rootScope.account=window.sessionStorage.getItem('account');
			$('#dg-container').gallery();
	}])