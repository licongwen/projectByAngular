'use strict'

angular.module('app')
	.controller('wuhuController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
		$rootScope.account=window.sessionStorage.getItem('account');
		
		function AlertImg(){
			var oDiv=document.createElement('div');
			oDiv.setAttribute('id','divHide');
			oDiv.setAttribute('class','divHide');
			document.body.appendChild(oDiv);


			var oImg=document.createElement('img');
			oImg.setAttribute('class','image');
			oImg.src=this.getAttribute('src');
			

			
			console.log(oImg.src);

			oImg.setAttribute('alt','ldsdsd');
			$('#divHide').append('oImg');
			oImg.onclick=restore;
		}
		function restore(){
		     document.body.removeChild(document.getElementById("overlay"));
		     document.body.removeChild(document.getElementById("img"));
		 }

		var Img=$('.listImg');

		for(var i=0;i<Img.length;i++){
			Img[i].onclick=AlertImg;
		}
	}])