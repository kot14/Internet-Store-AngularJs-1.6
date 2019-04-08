var app = angular.module('index', ['ngRoute']);



app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'app/navigation/shopping-list/shopping-list.html',
        })

        .when('/cart', {
            templateUrl: 'app/navigation/cart/cart.html',
        })
        .otherwise({
            redirectTo: '/home'
        });


}]);

app.controller('main', function ($location) {

    this.init = function () {
        if (localStorage.length > 1) {
            this.cartStatus = false;
            let json = localStorage.getItem("priceList");
            data = JSON.parse(json)
            this.cartItems = data;
            this.cartCounter = this.cartItems.length;
        }
        else{
            localStorage.setItem("priceList", JSON.stringify(this.cartItems));
        }
        
    }
    this.cartStatus = true;
    this.cartCounter = 0;


    this.items = [
        { text: 'Iphone', price: '400$', available: true },
        { text: 'Samsung', price: '300$', available: false },
        { text: 'Xiaomi', price: '200$', available: true }
    ];
    this.cartItems = [];

    this.goHome = function () {
        $location.path('/home')
    }

    this.add = function ($index) {
        this.cartItems.push(this.items[$index]);
        localStorage.setItem("priceList", JSON.stringify(this.cartItems));
        this.cartStatus = false;
        this.cartCounter = this.cartItems.length;
    };

    this.getCart = function () {
        $location.path('/cart');
        let json = localStorage.getItem("priceList");
        data = JSON.parse(json)
        this.cartItems = data;

    }
    this.clear = function ($index) {
        this.cartCounter--
        this.cartItems.splice($index, 1);
        localStorage.setItem("priceList", JSON.stringify(this.cartItems));
        if (this.cartItems.length <= 0) {
            $location.path('/home')
            this.cartStatus = true;
        };
    }
});

