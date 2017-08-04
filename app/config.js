window.APP = { version : 'v=20170711' };

angular.module('app')
	.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
	    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
	        // lazy controller, directive and service
	        //ui.load时需要用到
	        app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;
	        app.constant   = $provide.constant;
	        app.value      = $provide.value;
	    }
	])
	//配置中英文切换
	.config(['$translateProvider',function($translateProvider){
		var lang=window.localStorage.lang||'cn';
		$translateProvider.preferredLanguage(lang);
		$translateProvider.useStaticFilesLoader({
			prefix:'/data/',//指定前缀文件
			suffix:'.json'//指定后缀文件
		})

	}])