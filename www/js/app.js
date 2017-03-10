(function(angular) {
	angular.module('ModuloFinal', ['lumx','ngRoute','ngResource','ngAnimate'])
	.config(['$routeProvider','$locationProvider',
	  function($routeProvider, $locationProvider) {
	      $routeProvider.when("/",{
			controller:"HomeController",
			templateUrl:"templates/home.html"
	      }).when("/posts/:id",{
	      	controller:"PostController",
	      	templateUrl:"templates/post.html"
	      }).when("/posts",{
	      	controller:"PostFormController",
	      	templateUrl:"templates/formpost.html"
	      }).when('/posts/:id/edit',{
	      	controller:'PostFormController',
	      	templateUrl:'templates/formpost.html'
	      });
	}]);
})(window.angular);