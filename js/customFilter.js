//定义一个新的模块

var cf = angular.module("fillters", []);
//自定义过滤器
cf.filter("unique", function() {
	return function(data) {
		if(angular.isArray(data)) {
			var categoryes = [];
			var obj = {};
			for(var i = 0; i < data.length; i++) {
				var category = data[i].category; //拿出所有的球;
				if(angular.isUndefined(obj[category])) {
					obj[category] = true;
					categoryes.push(category);
				}
			}
			return categoryes;
		} else {
			return []
		}
	}
})