'use strict';

com.joveo.app.factory('menudata', function() {
  console.log("app service : menudata");
  var menu ={};
  var order = {};
  var user = {};
  var count = 0;
  var menuConfig = {
              "menu" : [{"menuType":"SouthIndian",
                          "menuItems":[{"sno":"1","name":"Dosa","price":"50","availqty":"10"},
                                        {"sno":"2","name":"Idli","price":"40","availqty":"10"}
                                      ]
                        },
                        {"menuType":"NorthIndian",
                          "menuItems":[{"sno":"1","name":"Rajma","price":"30","availqty":"10"},
                                      {"sno":"2","name":"Dal Rice","price":"20","availqty":"10"}]
                        }]
  };
  return {
    setMenuData: function() {
    	console.log('func_setMenuData');
      menu.menudata = menuConfig;
    },
    getMenuData: function() {
    	console.log('func_getMenuData');
      return menu.menudata;
    },
    setOrderSummary: function(orderdata) {
      console.log('func_setOrderSummary',orderdata);
      order.summary = orderdata;
    },
    getOrderSummary: function() {
      console.log('func_getOrderSummary');
      return order.summary;
    },
    setUserInfo: function(userdata) {
      console.log('func_setUserInfo');
      count++;
      user.orderid = "fzl"+count;
      user.info = userdata;
    },
    getUserInfo: function() {
      console.log('func_getUserInfo');
      return user;
    }
  };

});

