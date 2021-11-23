var app = angular.module("myApp", ['ngRoute', 'datatables']);
// 'pascalprecht.translate'
// var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/dashboard.html",
            controller: "dashboard_ctrl"
        })
        .when("/dashboard", {
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
        when("/orders", {
            templateUrl: "views/orders.html",
            controller: "orders_ctrl"
        }).
        when("/schedule_orders", {
            templateUrl: "views/schedule_orders.html",
            controller: "schedule_orders_ctrl"
        }).
        when("/dispute", {
            templateUrl: "views/dispute.html",
            controller: "dispute_ctrl"
        }).
        when("/support", {
            templateUrl: "views/support.html",
            controller: "support_ctrl"
        }).
        otherwise({
            templateUrl: "views/404.html"
        });;


});

// app.run(['$rootScope', function($rootScope) {
//     $rootScope.lang = 'en';
// }])


// app.config(["$translateProvider", function($translateProvider){

//     $translateProvider.useStaticFilesLoader({
//         prefix: 'locales/locale-',
//         suffix: '.json'
//     })
//     .useSanitizeValueStrategy('sanitizeParameters')    
//     .preferredLanguage('en');
// }]);