'use strict';

com.joveo.app.controller('confirm', function ($scope,$state,menudata) {
    	console.log('appctrl:confirm');

    var init = function(){
        console.log('func_init');
        $scope.thankyou = "Thank You";
        $scope.ordersummary = menudata.getOrderSummary();
        console.log('user----',menudata.getUserInfo());
        $scope.user = menudata.getUserInfo();
        console.log('user',$scope.user.fname);
    }();


    $scope.goBackHome = function(){
        console.log('func_goBackHome');
		$state.go("home");
    };

  });
