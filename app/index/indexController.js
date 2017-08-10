'use strict'
angular.module('app')
	.controller('indexController',['$rootScope','$stateParams','$scope','$translate','$http','$state',function($rootScope,$stateParams,$scope,$translate,$http,$state){
	
		if(window.sessionStorage.getItem('account')!='admin'){
			$state.go('access.login');
		}

	}])