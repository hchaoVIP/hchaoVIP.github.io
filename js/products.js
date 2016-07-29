//angular.module()；第以：创建一个新的模块，第二：获取一个新的模块；
// 如果只有一个参数 标示获取一个模块；
//如果有两个参数  标示创建一个新的模块，一一个参数标示的新模块名，第二个参数是一个数组，里面的每一个字符代表着已有的模块的名称，表示新建的模块需要依赖这些模块。

var app = angular.module("sportShop")
app.controller("productsCtrl", function($scope, $http) {
	$http({
		url: "php/getProducts.php",
		method: "GET"
	}).then(
		function(response) {
			//			console.log(response.data);
			//把后台的数据当作属性村起来;
			$scope.products = response.data;

			//点击没一页显示 3个数据
			$scope.productsPerpage = function(pagenum, numperpage) {
				//用一个变量保存选中的页码,用于后面的是否选中；
				$scope.yema = pagenum;
				var startindex = (pagenum - 1) * numperpage;
				var endindex = Math.min(pagenum * numperpage, $scope.categoryProducts.length);
				var resule = [];
				for(var i = startindex; i < endindex; i++) {
					resule.push($scope.categoryProducts[i])
				}
				$scope.pageProducts = resule;
			}

			//写一个函数，查找到对应标签点击时找到的球的种类；
			$scope.findCategory = function(category) {
				//用一个变量保存选中的分类,用于后面的是否选中；
				$scope.currentCatrgory = category;
				var resulr = [];
				if(category == "all") {
					//当点击
					resulr = $scope.products
				} else {
					for(var i = 0; i < $scope.products.length; i++) {
						if($scope.products[i].category == category) {
							resulr.push($scope.products[i]);
						}
					}
				}
				$scope.categoryProducts = resulr;
				$scope.productsPerpage(1, 3);
			}
			$scope.findCategory("all");

			//分的总页码函数；
			$scope.pages = function(page) {
				var count = $scope.categoryProducts.length;
				var pagesArry = []; //页码;
				var totalpage = Math.ceil(count / page); //向上取整;
				for(var i = 0; i < totalpage; i++) {
					pagesArry.push(i + 1);

				}
				return pagesArry;
			}

			//选中的分类的样式函数
			$scope.classOffCategory = function(category) {
				return $scope.currentCatrgory == category ? "btn-primary" : "";
			}
			$scope.classPage = function(yema) {
					return $scope.yema == yema ? "btn-primary" : "";

				}
				//			$scope.makeScreen = function(){
				//				var categoryes= [];
				//				var obj = '';
				//				for(var i = 0;i<$scope.products.length;i++){
				//					var category = $scope.products[i].category;//拿出所有的球;
				//					if(angular.isUndefined(obj[category])){
				//						obj[category] = true;
				//						categoryes.push(category);
				//					}
				//				}
				//				$scope.categoryes = categoryes;
				//			}
				//			$scope.makeScreen();

//			var res = [];
			$scope.addToCart = function(product) {
				var hasThisProduct = false //假定购物车里 面没有这个商品；
				for(var i = 0; i < $scope.res.length; i++) {
					if($scope.res[i].id == product.id) {
						$scope.res[i].counts++;
						hasThisProduct = true;
						break;
					}			
				}
				if(hasThisProduct == false){
					$scope.res.push({id:product.id,name:product.name,price:product.price,counts:1});
				}
				console.log($scope.res);

			}
			
		},
		function(response) {

		});

})