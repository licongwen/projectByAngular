'use strict'
var app=angular.module('app')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/access/login');

	$stateProvider
		.state('access',{
			url:'/access',
			template:'<div data-ui-view></div>'
		})
		.state('access.login',{
			url:'/login',
			templateUrl:'app/login/login.html',
			controller:'loginController',
			cache:false,
	       	resolve: {
	            deps: ['uiLoad', function(uiLoad) {
	            	 return uiLoad.load('app/login/loginController.js');
	            }]
	        }
		})
		.state('main',{
			abstract:true,
			template:'<div data-ui-view></div>'
		})
		.state('main.index',{
			url:'/index',
			templateUrl:'app/index/index.html',
			controller:'indexController',
			resolve:{
				index:['uiLoad',function(uiLoad){
					return uiLoad.load('app/index/indexController.js');
				}]
			}
		})
		.state('main.index.home',{
			url:'/home',
			templateUrl:'app/home/home.html',
			controller:'homeController',
			params:{'account':null},
			resolve:{
				deps:['uiLoad',function(uiLoad){
					return uiLoad.load('app/home/homeController.js');
				}]
			}
		})
		.state('main.index.work',{
			url:'/work',
			controller:'workController',
			templateUrl:'app/work/work.html',
			resolve:{
				work:['uiLoad',function(uiLoad){
					return uiLoad.load('app/work/workController.js')
				}]
			}
		})
		.state('main.index.text',{
			url:'/text',
			templateUrl:'app/text/text.html',
			controller:'textController',
			resolve:{
				text:['uiLoad',function(uiLoad){
					return uiLoad.load('app/text/textController.js')
				}]
			}
		})
		.state('main.index.photo',{
			url:'/photo',
			templateUrl:'app/photo/photo.html',
			controller:'photoController',
			resolve:{
				photo:['uiLoad',function(uiLoad){
					return uiLoad.load('app/photo/photoController.js')
				}]
			}
		})
		.state('main.index.suzhou',{
			url:'/suzhou',
			templateUrl:'app/photo/suzhou/suzhou.html',
			controller:'suzhouController',
			resolve:{
				suzhou:['uiLoad',function(uiLoad){
					return uiLoad.load('app/photo/suzhou/suzhouController.js')
				}]
			}
		})
		.state('main.index.balihe',{
			url:'/balihe',
			templateUrl:'app/photo/balihe/balihe.html',
			controller:'baliheController',
			resolve:{
				balihe:['uiLoad',function(uiLoad){
					return uiLoad.load('app/photo/balihe/baliheController.js')
				}]
			}
		})
		.state('main.index.lianyungang',{
			url:'/lianyungang',
			templateUrl:'app/photo/lianyungang/lianyungang.html',
			controller:'lianyungangController',
			resolve:{
				lianyungang:['uiLoad',function(uiLoad){
					return uiLoad.load('app/photo/lianyungang/lianyungangController.js')
				}]
			}
		})
		.state('main.index.wuhu',{
			url:'/wuhu',
			templateUrl:'app/photo/wuhu/wuhu.html',
			controller:'wuhuController',
			resolve:{
				wuhu:['uiLoad',function(uiLoad){
					return uiLoad.load('app/photo/wuhu/wuhuController.js')
				}]
			}
		})
		.state('main.index.shanghai',{
			url:'/shanghai',
			templateUrl:'app/photo/shanghai/shanghai.html',
			controller:"shanghaiController",
			resolve:{
				shanghai:['uiLoad',function(uiLoad){
					return uiLoad.load('app/photo/shanghai/shanghaiController.js')
				}]
			}

		})
		.state('main.index.yangzhou',{
			url:'/yangzhou',
			templateUrl:'app/photo/yangzhou/yangzhou.html',
			controller:'yangzhouController',
			resolve:{
				yangzhou:['uiLoad',function(uiLoad){
					return uiLoad.load('app/photo/yangzhou/yangzhouController.js')
				}]
			}
		})
		.state('main.index.nanjing',{
			url:'/nanjing',
			templateUrl:'app/photo/nanjing/nanjing.html',
			controller:'nanjingController',
			resolve:{
				nanjing:['uiLoad',function(uiLoad){
					return uiLoad.load('app/photo/nanjing/nanjingController.js')
				}]
			}
		})
		//
		.state('main.index.classtable',{
			url:'/classtable',
			templateUrl:'app/classtable/classtable.html',
			controller:'classtableController',
			resolve:{
				deps:['uiLoad',function(uiLoad){
					return uiLoad.load('app/classtable/classtableController.js')
				}]
			}

		})
}])
.controller('headerControl',['$rootScope','$scope','$http','$translate','$state',function($rootScope,$scope,$http,$translate,$state){
	
	if(window.localStorage.lang!="undefined"){
			$translate.use(window.localStorage.lang);
			$scope.lang = window.localStorage.lang;
    	}else{
    		$translate.use('en');
    		$scope.lang = 'en';
    	}
		$scope.switchLanguage=function(local){

			$translate.use(local);
			window.localStorage.lang=local;
			$scope.lang = local;
		}
		
		$scope.goToLogin=function(){
			$rootScope.account='';
			window.sessionStorage.removeItem('account');
			window.sessionStorage.removeItem('photoPassword');
		}

		
}])