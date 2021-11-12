var app = angular.module("myApp", ['ngRoute', 'datatables']);
// var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/dashboard.html",
            controller: "dashboard_ctrl"
        })
        .when("/products", {
            templateUrl: "views/product.html",
            controller: "product_ctrl"
        })
        .when("/category", {
            templateUrl: "views/category.html",
            controller: "category_ctrl"
        })
        .when("/sub-category", {
            templateUrl: "views/sub_category.html",
            controller: "sub_category_ctrl"
        })
        .when("/customers", {
            templateUrl: "views/customers.html",
            controller: "customers_ctrl"
        }).
        otherwise({
            templateUrl: "views/404.html"
        });;


});