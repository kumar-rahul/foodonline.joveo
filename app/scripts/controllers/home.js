'use strict';

/**
 * @ngdoc function
 * @name joveoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the joveoApp
 */
com.joveo.app.controller('home', function ($scope,$state,menudata) {
    	console.log('appctrl:home');

    var init = function(){
        console.log('func_init');
        $scope.checkout = "Checkout";
        $scope.summary = "OrderSummary";
        $scope.userdata = {};
        $scope.totalcount = 0;
        $scope.totalamount = 0;
        console.log('ordersummary',menudata.getOrderSummary());
        $scope.ordersummary = menudata.getOrderSummary();
        if(typeof $scope.ordersummary !== 'undefined' && $scope.ordersummary.length > 0){
            for(var i=0;i<$scope.ordersummary.length;i++){
                $scope.totalcount += $scope.ordersummary[i].count;
                $scope.totalamount += $scope.ordersummary[i].amount;
            }
        }else{
            //$scope.ordersummary.length=0;
        }

    }();


    $scope.addQty = function(item){
    	console.log('func_addQty',item);
		if($scope.ordersummary.includes(item)){
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
		if($scope.ordersummary.includes(item)){
    		if(item.count>1){
	    		item.count -= 1;
	    		item.amount = item.count*item.price;
                $scope.totalcount -=1;
                $scope.totalamount -= parseInt(item.price);
    		}else{
                $scope.totalcount -=1;
                $scope.totalamount -= parseInt(item.price);
    			var index = $scope.ordersummary.indexOf(item);
	    		$scope.ordersummary.splice(index, 1);
    		}
		}
    };


    $scope.confirmOrder = function(){
    	console.log('func_confirmOrder',$scope.userdata);
    	menudata.setUserInfo($scope.userdata);
    	menudata.setOrderSummary($scope.ordersummary);
		$state.go("confirm");
    };



  });
