var app = angular.module("sportShop",["fillters","ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when("/products",{templateUrl:"template/products.html"});
	$routeProvider.when("/checkout",{templateUrl:"template/checkout.html"});
	$routeProvider.otherwise({templateUrl:"template/products.html"});
});
app.controller("mainCtrl",function($scope,$http){
	$scope.res=[];
	$scope.totalCount=function(){
		$scope.totalPay =0;
		var sum=0;
		for(var i=0;i<$scope.res.length;i++){
			sum+=$scope.res[i].counts;
			$scope.totalPay+= $scope.res[i].counts * $scope.res[i].price;
		}
		return sum;
	}
})





app.directive("navGation",function(){
	return{
		//导航栏
		templateUrl:"navGation.html", //在服务器模式下开启这种方式，引入外部文件,首选.
	}
});