'use strict'
angular.module('app')
	.controller('homeController',['$rootScope','$scope','$translate','$http','$stateParams','$state',function($rootScope,$scope,$translate,$http,$stateParams,$state){
		//console.log($stateParams.account)
		//判断是否登录

			if($stateParams.account){
				$rootScope.account=$stateParams.account;
			}else{
				$rootScope.account=window.sessionStorage.getItem('account');
			}
			$('#selectTableModal').on('shown.bs.modal',function(e){

				$('#password').focus(); //通过ID找到对应输入框，让其获得焦点

			});

				$scope.goToPhoto=function(){

					var p = new Promise( (resolve)=>{
						if($('#password').val()==='930813'){
							window.sessionStorage.setItem('photoPassword',$('#password').val());
							$('#selectTableModal').modal('hide');
							resolve();
						}
						else{
							alert('密码错误，请输入正确的密码！')
						}
					});

					p.then(()=>{
						setTimeout(function(){
							$state.go('main.index.photo');
						},500)
					})

				}
				$scope.keyToPhoto=function($event){
					if($event.keyCode==13){
						var p = new Promise( (resolve)=>{
						if($('#password').val()==='930813'){
							window.sessionStorage.setItem('photoPassword',$('#password').val());
							$('#selectTableModal').modal('hide');
							resolve();
						}
						else{
							alert('密码错误，请输入正确的密码！')
							}
						});

						p.then(()=>{
							setTimeout(function(){
								$state.go('main.index.photo');
							},500)
						})
						
					}
				}
			

	}])		
