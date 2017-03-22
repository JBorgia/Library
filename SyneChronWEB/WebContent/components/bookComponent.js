var app = angular.module('ngLibrary');

function bookController(bookService,transactionService, authenticationService){

	var vm = this;
	vm.logged = function(){
		return authenticationService.isLoggedIn();
	}
	
	vm.cats;
	vm.selection;
	vm.propertyName = 'name';
	vm.reverse = true;
	vm.userinfo = authenticationService.currentUser();

	bookService.indexCategories()
		.then(function(res) {
		    console.log("IN .indexCategories");
		    vm.cats = res.data;
		    console.log(vm.cats);
		})

	vm.setSelection = function(book){
		if((book && vm.selection) && (book.name === vm.selection.name)){
			vm.selection = null;
		}
		else{
			vm.selection = book;
			vm.selection.author.birth = new Date(book.author.birth);
			vm.selection.author.death = new Date(book.author.death);
			vm.selection.pubDate = new Date(book.pubDate);
		}
		
		console.log("BOOK: ", book);
		console.log("SETSELECTION: ", vm.selection);
	}
	
	vm.issue = function(book){
		if(book.quantity>book.issued){
			book.issued = book.issued+1;
			console.log("UPDATED BOOK",book);
			bookService.editBook(book.id, book).then(function(res) {
				console.log("ISSUED: ",res.data);
			});
			
			var newTrans = {
					'book' : book,
					'type' : 'issued',
					'transDate' : new Date(),
			}
			
			transactionService.createTransaction(newTrans).then(function(res){
				console.log("TRANSACTION: ",res.data);
			});
		}
	}
	
	vm.return = function(book){
		console.log(book);
		if(book.issued>0){
			book.issued = book.issued-1;
			console.log("UPDATED BOOK",book);
			bookService.editBook(book.id, book).then(function(res) {
				console.log("RETURNED: ",res.data);
			});
			
			var newTrans = {
					'book' : book,
					'type' : 'returned',
					'transDate' : new Date(),
			}
			
			transactionService.createTransaction(newTrans).then(function(res){
				console.log("TRANSACTION: ",res.data);
			});
		}
	}
}
	

app.component('bookComponent',{
	template: ` <nav-component property-name="$ctrl.propertyName" reverse="$ctrl.reverse"></nav-component>
				<!--
				<h5 id="filterHeader">Filter by:</h5>
				<div class="col-lg-12">
				   <category ng-repeat="cat in $ctrl.cats">
				      <div class="inline-field">
				         <label for="{{cat.name}}">{{cat.name}} </label>
				         <input id="{{cat.name}}" type="checkbox" ng-click="$ctrl.addCat(cat)">
				      </div>
				   </category>
				</div>
				<br><br> --->
				<div class="container-fluid noPadNoMarg">
				   <div class="row book-display">
				      <v-accordion class="vAccordion--default">
				         <div class="col-sm-12 col-md-6">
				            <v-pane ng-repeat="book in $ctrl.books | orderBy:$ctrl.propertyName:$ctrl.reverse" ng-if="$index<$ctrl.books.length/2">
				               <v-pane-header ng-click="$ctrl.setSelection(book)" class="lib-header" >
				                  <div class="cat-wrapper">
				                     <div class="lib-left">
				                        <img src="assets/img/book-icon.png" class="libPaneImage">
				                     </div>
				                     <div class="lib-right">
				                        <h4> Title: <i>{{book.name}}</i></h4>
				                        <h5>Author: <i>{{book.author.last}}, {{book.author.first}} {{book.author.middle}}</i></h5>
				                     </div>
				                  </div>
				               </v-pane-header>
				               <v-pane-content>
				                  <div class="vPaneContentWrapper">
				                  
			                     	 <button class="libButton" ng-click="$ctrl.issue(book)">Issue</button>
				                     <button class="libButton" ng-click="$ctrl.return(book)">Return</button>
				                     
				                     <div class="desc-wrapper">
				                        <div class="desc-left">
				                           <h4>ISBN:</h4>
				                        </div>
				                        <div class="desc-right">
				                           <div>{{book.isbn}} </div>
				                        </div>
				                     </div>
				                     
				                     <div class="desc-wrapper">
				                        <div class="desc-left">
				                           <h4>Published:</h4>
				                        </div>
				                        <div class="desc-right">
				                           <div>{{book.pubDate | date:'mediumDate'}} </div>
				                        </div>
				                     </div>
				                     
				                     <div class="desc-wrapper">
				                        <div class="desc-left">
				                           <h4>Category:</h4>
				                        </div>
				                        <div class="desc-right">
				                           <div>{{book.category.name}} </div>
				                        </div>
				                     </div>
				                     
				                     <div class="desc-wrapper">
				                        <div class="desc-left-inventory inline-field">
											<div class="inventory-item">
					                        	<h4>Quantity: <i>{{book.quantity}}</i></h4>
				                        	</div>
											<div class="inventory-item">
					                        	<h4>Out:</b> <i>{{book.issued}}</i></h4>
					                        </div>
											<div class="inventory-item">	
					                        	<h4>On-Hand:</b> <i>{{(book.quantity - book.issued)}}</i></h4>
				                        	</div>
				                        </div>
				                     </div>

				                  </div>
				               </v-pane-content>
				            </v-pane>
				         </div>
				         <div class="col-sm-12 col-md-6">
				            <v-pane ng-repeat="book in $ctrl.books | orderBy:$ctrl.propertyName:$ctrl.reverse" ng-if="$index>=$ctrl.books.length/2">
				               <v-pane-header ng-click="$ctrl.setSelection(book)" class="lib-header" >
				                  <div class="cat-wrapper">
				                     <div class="lib-left">
				                        <img src="assets/img/book-icon.png" class="libPaneImage">
				                     </div>
				                     <div class="lib-right">
				                        <h4> Title: <i>{{book.name}}</i></h4>
				                        <h5>Author: <i>{{book.author.last}}, {{book.author.first}} {{book.author.middle}}</i></h5>
				                     </div>
				                  </div>
				               </v-pane-header>
				               <v-pane-content>
				                  <div class="vPaneContentWrapper">
				                  
			                     	 <button class="libButton" ng-click="$ctrl.issue(book)">Issue</button>
				                     <button class="libButton" ng-click="$ctrl.return(book)">Return</button>
				                     
				                     <div class="desc-wrapper">
				                        <div class="desc-left">
				                           <h4>ISBN:</h4>
				                        </div>
				                        <div class="desc-right">
				                           <div>{{book.isbn}} </div>
				                        </div>
				                     </div>
				                     
				                     <div class="desc-wrapper">
				                        <div class="desc-left">
				                           <h4>Published:</h4>
				                        </div>
				                        <div class="desc-right">
				                           <div>{{book.pubDate | date:'mediumDate'}} </div>
				                        </div>
				                     </div>
				                     
				                     <div class="desc-wrapper">
				                        <div class="desc-left">
				                           <h4>Category:</h4>
				                        </div>
				                        <div class="desc-right">
				                           <div>{{book.category.name}} </div>
				                        </div>
				                     </div>
				                     
				                     <div class="desc-wrapper">
				                        <div class="desc-left-inventory inline-field">
											<div class="inventory-item">
					                        	<h4>Quantity: <i>{{book.quantity}}</i></h4>
				                        	</div>
											<div class="inventory-item">
					                        	<h4>Out:</b> <i>{{book.issued}}</i></h4>
					                        </div>
											<div class="inventory-item">	
					                        	<h4>On-Hand:</b> <i>{{(book.quantity - book.issued)}}</i></h4>
				                        	</div>
				                        </div>
				                     </div>

				                  </div>
				               </v-pane-content>
				            </v-pane>
				         </div>
				      </v-accordion>
				   </div>
				</div>
				<crud-component books="$ctrl.books" book="$ctrl.selection" cats="$ctrl.cats"></crud-component>
				`,

	controller : bookController,
	bindings : {
		books : "<",
	}
 });
