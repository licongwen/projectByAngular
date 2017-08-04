angular.module('app')
	.controller('textController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
		$rootScope.account=window.sessionStorage.getItem('account');
	}])