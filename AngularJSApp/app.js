var app = angular.module("testeApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        controller: "HomeCtrl",
        templateUrl: "views/home.html"
    });

    $routeProvider.when("/page1", {
        controller: "Page1Ctrl",
        templateUrl: "views/page1.html"
    });

    $routeProvider.when("/page2", {
        controller: "Page2Ctrl",
        templateUrl: "views/page2.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });


});