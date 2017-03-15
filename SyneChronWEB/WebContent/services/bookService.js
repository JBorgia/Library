angular.module('ngLibrary').factory('bookService',
		function($http, authenticationService) {
			var service = {};

			service.indexBooks = function() {

				return $http({
					method : 'GET',
					url : 'api/book',
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})
			};
			
			service.indexCategories = function() {

				return $http({
					method : 'GET',
					url : 'api/categories',
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})
			};

			service.getBook = function(id) {

				return $http({
					method : 'GET',
					url : 'api/book/' + id,
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})
			};

			service.createBook = function(data) {

				return $http({
					method : 'POST',
					url : 'api/book',
					dataType : 'json',
					headers : {
						'Content-Type' : 'application/json',
						'x-access-token' : authenticationService.getToken()
					},
					data : data
				})

			}

			service.deleteBook = function(id) {

				return $http({
					method : 'DELETE',
					url : 'api/book/' + id,
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})

			}

			service.editBook = function(id, data) {

				return $http({
					method : 'PUT',
					url : 'api/book/' + id,
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
