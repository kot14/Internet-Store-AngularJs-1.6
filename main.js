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
    this.items = [
		{text: 'Iphone', price:'400$',available: true},
		{text: 'Samsung', price:'300$',available: false},
		{text: 'Xiaomi', price:'200$',available: true}
    ];
    this.cartItems = [];

this.add = function($index){  
    this.cartItems.push(this.items[$index]);
};
this.ss = function(){
    localStorage.setItem("priceList",JSON.stringify(this.cartItems) ); 
}

this.getCart = function(){  
    let json = localStorage.getItem("priceList"); 
    data = JSON.parse(json)
    this.cartItems = data;
    console.log(this.cartItems);
}
this.clear = function($index){
    this.cartItems.splice($index,1);
}
});

