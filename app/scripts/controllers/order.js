'use strict';

/**
 * @ngdoc function
 * @name joveoApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the joveoApp
 */

com.joveo.app.controller('order', function ($scope,$state,menudata) {
    	console.log('appctrl:order');
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    var init = function(){
    	console.log('func_init');
    	$scope.orderArray = [];
        $scope.totalcount = 0;
        $scope.totalamount = 0;
    	menudata.setMenuData();
    	$scope.menudata = menudata.getMenuData().menu;
    }();

    $scope.addItem = function(item){
    	console.log('func_addItem',item);
    	if(typeof $scope.orderArray !== 'undefined' && $scope.orderArray.length > 0){
    		if($scope.orderArray.includes(item)){
    			if(item.count < item.availqty){
		    		item.count += 1;
		    		item.amount = item.count*item.price; 
                    $scope.totalcount +=1;
                    $scope.totalamount += parseInt(item.price);
    			}else{
		    		console.log("item not in stock!!");
    			}
    		}else{
	    		item.count = 1;
            	item.amount = item.price;
                $scope.totalcount +=1;
                $scope.totalamount += parseInt(item.price);
	    		$scope.orderArray.push(item);
    		}
    	}else{
    		item.count = 1;
    		item.amount = item.price;
            $scope.totalcount = 1;
            $scope.totalamount = parseInt(item.price);
    		$scope.orderArray.push(item);
    	}
//		$state.go("app.order");
    };

    $scope.subtractItem = function(item){
    	console.log('func_subtractItem',item);
    	if(typeof $scope.orderArray !== 'undefined' && $scope.orderArray.length > 0){
//    		$scope.showsubtract = true;
    		if($scope.orderArray.includes(item)){
	    		if(item.count>1){
		    		item.count -= 1;
		    		item.amount = item.count*item.price;
                    $scope.totalcount -=1;
                    $scope.totalamount -= parseInt(item.price);
	    		}else{
                    $scope.totalcount -=1;
                    $scope.totalamount -= parseInt(item.price);
                    var index = $scope.orderArray.indexOf(item);
		    		$scope.orderArray.splice(index, 1);
	    		}
    		}
    	}else{
    		console.log("order array empty!!");
//    		$scope.showsubtract = true;
    	}
//		$state.go("app.order");
    };

    $scope.addQty = function(item){
    	console.log('func_addQty',item);
		if($scope.orderArray.includes(item)){
			if(item.count < item.availqty){
	    		item.count += 1;
	    		item.amount = item.count*item.price;
                $scope.totalcount +=1;
                $scope.totalamount += parseInt(item.price);
			}else{
	    		console.log("item not in stock!!");
			}
		}else{
	    		console.log("item not in order list!!");
		}
    };

    $scope.subtractQty = function(item){
    	console.log('func_subtractQty',item);
		if($scope.orderArray.includes(item)){
    		if(item.count>1){
	    		item.count -= 1;
	    		item.amount = item.count*item.price;
                $scope.totalcount -=1;
                $scope.totalamount -= parseInt(item.price);
    		}else{
                $scope.totalcount -=1;
                $scope.totalamount -= parseInt(item.price);
    			var index = $scope.orderArray.indexOf(item);
	    		$scope.orderArray.splice(index, 1);
    		}
		}
    };

    $scope.checkout = function(){
    	console.log('func_checkout');
    	menudata.setOrderSummary($scope.orderArray);
		$state.go("home");
    };



  });
