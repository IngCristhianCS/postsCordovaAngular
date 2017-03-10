angular.module('ModuloFinal')
.controller('MainCtrl', ['$route', '$routeParams', '$location',
 function MainCtrl($route, $routeParams, $location){
}])
.controller('HomeController', ['$scope','$resource','$routeParams','ApiPostsService',
 function ($scope,$resource,$routeParams,ApiPostsService) {
	var User = $resource('https://jsonplaceholder.typicode.com/users/:id', {id: '@id'});
	ApiPostsService.allPosts().then(function successCallback(response) {
		$scope.posts = response.data;
		console.log($scope.posts);
	});	
	$scope.users = User.query();
	$scope.removePost = function (post) {
		var isConfirmDelete = confirm('Realmente desea eliminar el Post '+post.title+'?');
	    if (isConfirmDelete) {
	    	ApiPostsService.deletePost(post).then(function successCallback(response) {
				$scope.posts = $scope.posts.filter(function (element) {
					return element.id != post.id;
				});
				alertify.alert('', 'Eliminado Correctamente!');
			},function errorCallback(response) {
				alertify.alert('', 'Error en la peticion!');
			});
	    } 
	}
}])
.controller('PostController', ['$scope','$routeParams','$http','ApiPostsService',
 function ($scope,$routeParams,$http,ApiPostsService){
	ApiPostsService.selectPost($routeParams.id).then(function successCallback(response) {
		$scope.post = response.data;
	});
}])
.controller('PostFormController', ['$scope','$http','$routeParams','ApiPostsService',
 function($scope,$http,$routeParams,ApiPostsService){
 	$scope.post={};
 	if($routeParams.id){
 		ApiPostsService.selectPost($routeParams.id).then(function successCallback(response) {
			$scope.post = response.data;
		});
 	}else{
 		$scope.post.id=null;
 	}	
    $scope.addOrUpdatePost = function () {  
	    if ($scope.post.id != null) {
	    	ApiPostsService.updatePost($scope.post).then(function successCallback(response) {
			  	$scope.post = response.data;
			  	alertify.alert('', 'Actualizado Correctamente!');
			},function errorCallback(response) {
				alertify.alert('', 'Error en la peticion!');
			});
	    } else {
	    	ApiPostsService.insertPost($scope.post).then(function successCallback(response) {
				$scope.post={};
				alertify.alert('', 'Registrado Correctamente!');
			},function errorCallback(response) {
				alertify.alert('', 'Error en la peticion!');
			});
	    }  		
    }
}]);