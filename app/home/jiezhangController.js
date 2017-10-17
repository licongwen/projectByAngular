'use strict'

app.controller('jiezhangController',['$scope','$stateParams','$rootScope',function($scope,$stateParams,$rootScope){
	
	$rootScope.totalNumber = $stateParams.totalNumber;
	$rootScope.totalMoney = $stateParams.totalMoney;

	$scope.li='licongwen';

	console.log(123);

}])