var app = angular.module('index',['ngRoute']);
app.config(['$routeProvider','$locationProvider',function($routeProvider){

$routeProvider
    .when('/home',{
        templateUrl:'app/navigation/shopping-list/shopping-list.html',
    })

    .when('/cart',{
        templateUrl:'app/navigation/cart/cart.html',
    })
    .otherwise({
        redirectTo:'/home'
    });


}]);

app.controller('main',function(){
  this.phones = ['iphone','samsung','xiaomi'];
  this.id = function(){
      for(var i = 0; phones.length > i; i++){
          return i;
      }
  }

this.test = function($index){
    alert($index);
}
});

