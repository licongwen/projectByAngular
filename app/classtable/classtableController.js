'use strict'

angular.module('app')
	.controller('classtableController',['$scope','$http','$state','$rootScope',function($scope,$http,$state,$rootScope)
	{
		
		//判断有没有登录

		$rootScope.account=window.sessionStorage.getItem('account');

		var data=[
			{
			"time":"第一节",
			"monday":"体育课",
			"tuesday":"语文课",
			"wednesday":"数学课",
			"thursday":"英语课",
			"friday":"物理课"
			},
			{
				"time":"第二节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},
			{
				"time":"第三节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},
			{
				"time":"第一节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},{
				"time":"第二节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},{
				"time":"第三节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},{
				"time":"第三节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},{
				"time":"第三节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},{
				"time":"第三节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},{
				"time":"第三节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},{
				"time":"第三节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			},{
				"time":"第三节",
				"monday":"体育课",
				"tuesday":"语文课",
				"wednesday":"数学课",
				"thursday":"英语课",
				"friday":"物理课"
			}
		]
		
		$scope.classTableControl={
			options:{
				data:data,
				method: "get",
	            //sidePagination: "server", 
	            cache: false,
	            striped: true,
	           	pagination: true,
	            pageSize: 10,
	            pageList: [5, 10, 25, 50, 100, 200],
	            search: true,
	            showColumns: true,
	            showRefresh: false,
	            minimumCountColumns: 2,
	            maintainSelected: true,
				columns:[{
					field:'time'
				},{
					field:'monday',
					title:'星期一',
				},{
					field:'tuesday',
					title:'星期二',
					editable: {
		                type: 'text'
		            }
				},{
					field:'wednesday',
					title:'星期三',
				},{
					field:'thursday',
					title:'星期四',
				},{
					field:'friday',
					title:'星期五',
				}]
			}
		}
	}])