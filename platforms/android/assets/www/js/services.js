angular.module('ModuloFinal')
.service('ApiPostsService', ['$http', function($http){
	var URL_ROOT = 'http://192.168.1.72';
	this.updatePost = function (parametros) {
		$http({
       		method: 'POST',
       		url:URL_ROOT+'/post/'+parametros.id ,
       		data:$.param(parametros),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
	}

	this.allPosts = function () {
		return $http.get(URL_ROOT + '/post');			
	}

	this.deletePost = function (post) {
		return $http({
       		method: 'DELETE',
       		url: URL_ROOT + '/post/'+ post.id
       	});
	}

	this.selectPost = function (id) {
		return $http.get(URL_ROOT + '/post/' + id);
	}
	this.insertPost = function (parametros) {
		return $http({
       		method: 'POST',
       		url:URL_ROOT+'/post',
       		data:$.param(parametros),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		} );
	}
	
}]);