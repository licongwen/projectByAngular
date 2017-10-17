'use strict'

app.controller('jiezhangController',['$scope','$http','$stateParams','$rootScope',function($scope,$http,$stateParams,$rootScope){
	
	$scope.totalNumber = $stateParams.totalNumber || 0;
	$scope.totalMoney = $stateParams.totalMoney || 0;

	
	$scope.sureToBuy = function( ){
		alert('购买成功!');
		console.log(1213)
	}
}])