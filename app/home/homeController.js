'use strict'
var app=angular.module('app');

	app.controller('homeController',['$rootScope','$scope','$translate','$http','$stateParams','$state','generateBall',function($rootScope,$scope,$translate,$http,$stateParams,$state,generateBall){

		//判断是否登录
			if($stateParams.account){
				$rootScope.account=$stateParams.account;
			}else{
				$rootScope.account=window.sessionStorage.getItem('account');
			}
			$('#selectTableModal').on('shown.bs.modal',function(e){

				$('#password').focus(); //通过Id找到对应输入框，让其获得焦点

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
	//双色球逻辑
	$scope.redArr=[];//接受红球的数组
	$scope.blueArr=[];//接受蓝球的数组
	$scope.totalNumber=0;//总的投注数
	$scope.totalMoney=0;//总的金额
	
	let oUl=$('#BetNumberListContanior');
	let sum_red=0;//红球的数量
	let sum_blue=0;//蓝球的数量
	let selectedRedNumber=0;//选中的红球数量
	let selectedBlueNumber=0;//选中的红球数量
	let needToSelectRedNumber=0;//随机红球的个数
	let needToSelectBlueNumber=0;//随机蓝球的个数
	let beishu=parseInt($("#multiple").val());//获取投注的倍数

	let sum_T=0;//总的彩票注数
	let sum_M=0;//总的彩票钱
	let sum_1=1;
    let	sum_2=1;
    let	sum_3=1;
    let sum_4=1;

	let allRed=$('#active_red b');//获取所有的红球
	let allBlue=$('#active_blue b');//获取所有蓝球
	let sum_Items=$('#items');//获取多少注的元素
	let sum_Money=$('#sum');//获取金额的元素 

	
    //使确认选号按钮可用
    function ableAddBtn(){
    	if(selectedRedNumber>=6 && selectedBlueNumber>=1){
    		$('#addToListBtn').removeClass('disabled');
        	$('#addToListBtn').removeAttr('disabled');
        	
    	}
    	if( selectedRedNumber<6 || selectedBlueNumber<1){
    		$('#addToListBtn').addClass('disabled');
			$('#addToListBtn').attr('disabled',true);
			sum_T=0;
    	}
    	if(selectedRedNumber==6 && selectedBlueNumber==1){
    		sum_T=1;
    	}
    	if(selectedRedNumber>=6 && selectedBlueNumber>1 || selectedRedNumber>6 && selectedBlueNumber>=1){
    		sum_1=1;
    		sum_2=1;
    		sum_3=1;
    		for(let i=1;i<=selectedRedNumber;i++){
    			sum_1*=i;
    		}
    		for(let i=1;i<=6;i++){
    			sum_2*=i;
    		}
    		for(let i=1;i<=(selectedRedNumber-6);i++){
    			sum_3*=i;
    		}

    		sum_4=(sum_1/(sum_2*sum_3));

    		sum_T=sum_4*selectedBlueNumber;
    	}
    	sum_Items.text(sum_T);
    	sum_Money.text(2*sum_T);

    	
    }
	//机选红球功能
	$scope.randomSelectRed=function(){

		$scope.redArr=[];//每次选择之前清空上次选中的红球 
		

		$('#active_red b').removeClass('active_red');//先清除所有选中的球

		needToSelectRedNumber=$('#rand_sel_red').find('option:selected').text();
		
		$scope.redArr=generateBall.generateRed();

		for(var i=0;i<needToSelectRedNumber;i++){
			for(var j=0;j<33;j++){
				if(allRed[j].innerHTML==$scope.redArr[i]){
					allRed[j].setAttribute('class','active_red')
				}
			}
		}
		selectedRedNumber=$('.active_red').length;
		
		ableAddBtn();

	}
	// 机选蓝球功能
	$scope.randomSelectBlue=function(){
		$scope.blueArr=[];//每次选择之前清空上次选中的蓝球

		$('#active_blue b').removeClass('active_blue');//先清除所有选中的球

		$scope.blueArr=generateBall.generateBlue();

		needToSelectBlueNumber=$('#rand_sel_blue').find('option:selected').text();

		for(var i=0;i<needToSelectBlueNumber;i++){
			for(var j=0;j<16;j++){
				if(allBlue[j].innerHTML==$scope.blueArr[i]){
					allBlue[j].setAttribute('class','active_blue')
				}
			}
		}
		selectedBlueNumber=$('.active_blue').length;

		ableAddBtn();

	}
	//单个点击红球的事件
	$('#active_red b').click(function(){
		selectedRedNumber=0;

		selectedRedNumber=$('.active_red').length;

		if(selectedRedNumber<20){
			$(this).toggleClass('active_red');
		}else{
			$('.active_red').click(function(){
				$(this).toggleClass('active_red');
			})
		}
		
		selectedRedNumber=$('.active_red').length;
		ableAddBtn();
		
	})
	//单个点击蓝球的事件
	$('#active_blue b').click(function(){
		selectedBlueNumber=0;

		$(this).toggleClass('active_blue');
		selectedBlueNumber=$('.active_blue').length;
		ableAddBtn();
		
	})
	//清空红球的功能
	$scope.clearRed=function(){
		selectedRedNumber=0;
		allRed.removeClass('active_red');
		$('#addToListBtn').addClass('disabled');
		$('#addToListBtn').attr('disabled',true);
		sum_Items.text(0);
    	sum_Money.text(0);
	}
	//清空蓝球
	$scope.clearBlue=function(){
		selectedBlueNumber=0;
		allBlue.removeClass('active_blue');
		$('#addToListBtn').addClass('disabled');
		$('#addToListBtn').attr('disabled',true);
		sum_Items.text(0);
    	sum_Money.text(0);
	}

	//清空全部
	$scope.clearAll=function(){
		selectedBlueNumber=0;
		selectedRedNumber=0;
		allBlue.removeClass('active_blue');
		allRed.removeClass('active_red');
		$('#addToListBtn').addClass('disabled');
		$('#addToListBtn').attr('disabled',true);
		sum_Items.text(0);
    	sum_Money.text(0);
	}
	//确认选号功能
	$scope.SureToSelect=function(){
		let oLi=$(
			"<li>标准单式</li>"
		);
		for(let i=0;i<selectedRedNumber;i++){
			oLi.append(","+$scope.redArr[i])
		}
		oLi.append("||")
		for(let j=0;j<selectedBlueNumber;j++){
			oLi.append($scope.blueArr[j])
		}
		oLi.append("&nbsp;&nbsp;&nbsp;&nbsp;"+sum_T+"注，"+2*sum_T+"元"+"<a class='deleteThis' style='cursor:pointer'>删除本行<a>");
		oUl.append(oLi);
		$('.deleteThis').click(function(){
			$(this).parent().remove();
		});
		$scope.totalNumber+=sum_T;
		$scope.totalMoney=2*$scope.totalNumber*beishu;
	}
	

	//机选一注按钮功能
	$scope.SelectOne=function(){
		$scope.redArr=[];
		$scope.blueArr=[];
		$scope.redArr=generateBall.generateRed();
		$scope.blueArr=generateBall.generateBlue();
		let oLi=$("<li>"+"标准单式"+
			','+$scope.redArr[0]+
			','+$scope.redArr[1]+ 
			','+$scope.redArr[2]+ 
			','+$scope.redArr[3]+ 
			','+$scope.redArr[4]+ 
			','+$scope.redArr[5]+  
			"||"+$scope.blueArr[0]+
			"&nbsp;&nbsp;&nbsp;&nbsp;1注，2元"+
			"<a class='deleteThis' style='cursor:pointer;'>删除本行<a>"+
			"</li>");
		oUl.append(oLi);

		$('.deleteThis').click(function(){
			$(this).parent().remove();
		});
		
		$scope.totalNumber+=1;
		$scope.totalMoney=2*$scope.totalNumber*beishu;
	}
	//机选五注功能
	$scope.SelectFive=function(){
		for(let i=0;i<5;i++){
			$scope.SelectOne();
		};
	}
	//机选n注功能
	$scope.SelectAny=function(){
		for(let i=0;i<parseInt($('#jxBtnTxt').val());i++){
			$scope.SelectOne();
		}
	}

	$scope.ClearAllList=function(){
		oUl.empty();
		$scope.totalNumber=0;
		$scope.totalMoney=0;
	}

	

	$scope.beiDown=function(){
		if(beishu>0){
			beishu-=1;
		}else{
			beishu=0;
		}
		$("#multiple").val(beishu);
		$scope.totalMoney=2*$scope.totalNumber*beishu;
	}
	$scope.beiUp=function(){
		if(beishu<9999){
			beishu+=1;
		}else{
			beishu=9999;
		}
		$("#multiple").val(beishu);
		$scope.totalMoney=2*$scope.totalNumber*beishu;
	}
	//generateBall.ableAdd();
}])

app.directive('sureToSelect',function(){
	return {
		restrict:"E",
		scope:{//不能有大写
			toselect:"&",
			clearall:"&"
		},
		template:`
				<p class="sure"> 
					<input title="确认选号"  class="addbtn disabled" disabled id="addToListBtn" ng-click="toselect()">
					<a id="clearNumberBtn" href="javascript:void(0)" ng-click="clearall()">清空全部</a>
				</p>`
	}

})

app.service('generateBall',function(){
	//产生随机红球数组
	this.generateRed=function(){
		this.redArr=[];
		var arr=[];
		for(var i=0;i<33;i++){
			arr[i]=i+1;
		}
	for(var i=0;i<33;i++){
			var rand=parseInt(Math.random()*arr.length);
			this.redArr.push(arr[rand]);
			arr.splice(rand,1);
		}
		return this.redArr;
	}
	//产生随机蓝球数组
	this.generateBlue=function(){
	this.blueArr=[];
	var arr=[];
	for(var i=0;i<16;i++){
		arr[i]=i+1;
	}
	for(var i=0;i<16;i++){
			var rand=parseInt(Math.random()*arr.length);
			this.blueArr.push(arr[rand]);
			arr.splice(rand,1);
		}
		return this.blueArr;
	}		
	
})