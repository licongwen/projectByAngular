'use strict'

angular.module('app')
	.controller('photoController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
		$rootScope.account=window.sessionStorage.getItem('account');

		if(window.sessionStorage.getItem('photoPassword')!='930813'){
			$state.go('main.index.home');
		}
	}])