angular.module('ngLibrary').factory('transactionService',
		function($http, authenticationService) {
			var service = {};

			service.indexTransactions = function() {

				return $http({
					method : 'GET',
					url : 'api/transaction',
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})
			};
			
			service.getTransaction = function(id) {

				return $http({
					method : 'GET',
					url : 'api/transaction/' + id,
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})
			};

			service.createTransaction = function(data) {

				return $http({
					method : 'POST',
					url : 'api/transaction',
					dataType : 'json',
					headers : {
						'Content-Type' : 'application/json',
						'x-access-token' : authenticationService.getToken()
					},
					data : data
				})

			}

			service.deleteTransaction = function(id) {

				return $http({
					method : 'DELETE',
					url : 'api/transaction/' + id,
					headers : {
						'x-access-token' : authenticationService.getToken()
					}
				})

			}

			service.editTransaction = function(id, data) {

				return $http({
					method : 'PUT',
					url : 'api/transaction/' + id,
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
