var app = angular.module('ngLibrary', ['ngRoute','ui.bootstrap','vAccordion', 'ngAnimate','ngMaterial']); //ngRoute and 'ui.bootstrap' are module dependencies

app.config(function($routeProvider){ // $routeProvider is an Angular service
  console.log("INSIDE config: routes");
  $routeProvider
		.when('/', {
			template: `<book-component></book-component>` // use templateURL to reference a different file
		})
		.when('/login', {
			template: `<login-component></login-component>` // use templateURL to reference a different file
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
