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
				oImg.setAttribute('class','addImage');
				oImg.src=this.getAttribute('src');
			//console.log(oImg.src);
			$('#divHide').append(oImg);

			oDiv.onclick=restore;
		}
		function restore(){
		     document.body.removeChild(document.getElementById("divHide"));
		 }

		var Img=$('.listImg');

		for(var i=0;i<Img.length;i++){
			Img[i].onclick=AlertImg;

		}
	}])