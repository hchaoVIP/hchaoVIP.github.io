var app = angular.module("sportShop")
	app.controller("checkoutCtrl",function($scope){
	$scope.delete = function(product){
		for(var i=0; i< $scope.res.length;i++){
			if($scope.res[i].id == product.id){
				$scope.res.splice(i,1);
				break;
			}
		}
	}
})