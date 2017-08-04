'use strict'

angular.module('app')
	.controller('loginController',[ '$rootScope', '$scope', '$http', '$state', function($rootScope, $scope, $http, $state) {
        $scope.user={};	
        $scope.login=function(){
        	$http({
	        	url:'data/login.json',
	        	method:'GET'
	        }).then(function successCallback(res,req){
	        	if(res.status===200){
	        		if($scope.user.account===res.data.account&&$scope.user.password===res.data.password){
	        			$state.go('main.index.home',{account:$scope.user.account});
        				window.sessionStorage.setItem('account',$scope.user.account);
	        		}else{
		        		$scope.msg='账号或密码错误';
		        	}
	        	}
	        }, function failCallback(res,req){

	        });
        }

        $('.login-field').focus(function(){
        	$scope.msg='';
        })
        
}]);