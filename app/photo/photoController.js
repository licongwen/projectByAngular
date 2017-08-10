'use strict'

angular.module('app')
	.controller('photoController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
		$rootScope.account=window.sessionStorage.getItem('account');

		if(window.sessionStorage.getItem('photoPassword')!='930813'){
			
			// var P=new Promise(function(resolve,request){
			// 	$state.go('main.index.home');
			// 	resolve();
			// }).then(function(){
			// 	setTimeout(function(){
			// 		$('#selectTableModal').modal('show');
			// 	},500)
				
			// })
			$state.go('main.index.home');
			setTimeout(function(){
					$('#selectTableModal').modal('show');
			},500)


		}
		//日历控件

	}])