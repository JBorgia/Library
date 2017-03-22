angular.module('ngLibrary').factory('authorService',
		function($http, authenticationService) {
			var service = {};

			service.indexAuthors = function() {

				return $http({
					method : 'GET',
					url : 'api/author',
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})
			};
			
			service.indexCategories = function() {

				return $http({
					method : 'GET',
					url : 'api/category',
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})
			};

			service.getAuthor = function(id) {

				return $http({
					method : 'GET',
					url : 'api/author/' + id,
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})
			};

			service.createAuthor = function(data) {

				return $http({
					method : 'POST',
					url : 'api/author',
					dataType : 'json',
					headers : {
						'Content-Type' : 'application/json',
						'x-access-token' : authenticationService.getToken()
					},
					data : data
				})

			}

			service.deleteAuthor = function(id) {

				return $http({
					method : 'DELETE',
					url : 'api/author/' + id,
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})

			}

			service.editAuthor = function(id, data) {

				return $http({
					method : 'PUT',
					url : 'api/author/' + id,
					dataType : 'json',
					headers : {
						'Content-Type' : 'application/json',
						'x-access-token' : authenticationService.getToken()
					},
					data : data
				})

			}

			return service;
		});
