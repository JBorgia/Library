var app = angular.module('ngLibrary', ['ngRoute','ui.bootstrap','vAccordion', 'ngAnimate','ngMaterial']); //ngRoute and 'ui.bootstrap' are module dependencies

app.config(function($routeProvider){ // $routeProvider is an Angular service
  console.log("INSIDE config: routes");
  $routeProvider
		.when('/', {
			template: `<book-component books="$resolve.myData"></book-component>`, // use templateURL to reference a different file
				
			resolve : {
//					     auth : function(authenticationService) {
//					       // use an authService to perform an authentication check
//					     },
				myData : function(bookService, $route, $location) {
						console.log('in resonlve func');
		   		        return bookService.indexBooks() // call get debate to fetch the debate by id
		   		         .then(function(res) {
		   		           console.log("IN .THEN in /");
		   		           console.log(res.data);
		   		           return res.data; // return the JSON data of the fetched debate.
		   		         })
		   		         .catch(function(err) {
		   		           // if the id was not found, redirect to not found
		   		           if (err.status == 404) {
		   		             $location.path('/_404');
		   		           }
		   		         })
		   		       } 
	   		     }
		})
		.when('/nav', {
			template: `<nav-component></nav-component>` // use templateURL to reference a different file
		})
		.when('/about', {
			template: `<about-component></about-component>` // use templateURL to reference a different file
		})
		.when('/books', {
			template: `<book-component></book-component>` // use templateURL to reference a different file
		})
		.otherwise({
		    redirectTo: '/'
		})
});
