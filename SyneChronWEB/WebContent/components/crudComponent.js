var app = angular.module('ngLibrary');


function crudController(authorService, bookService, authenticationService, $scope, $location){
	var vm = this;

	vm.logSelection = function(book){
		console.log("SELECTION: ",book);
	}
	
	vm.editBook = function(book, showNew, showEdit){
		console.log("THE 'book' PARAMETER: ", book);
		console.log("SHOW NEW: ", showNew);
		console.log("SHOW EDIT: ", showEdit);
		
		if(showNew){
			
			// create and store author
			var newAuthor = {
				'first' : book.author.first,
				'middle': book.author.middle,
				'last' : book.author.last,
				'birth' : book.author.birth,
				'death' : book.author.death
			}
			console.log("AUTHOR AS BUILT: " , newAuthor);
			authorService.createAuthor(newAuthor).then(function(res) {
				newAuthor = res.data;
				newAuthor.birth = new Date(res.data.birth);
				newAuthor.death = new Date(res.data.death);
				// create and store book
				book.author = newAuthor;
				
				
				console.log("BOOK AS BUILT: ", book);
				bookService.createBook(book).then(function(res) {
					console.log("STORED",res.data);
					bookService.indexBooks() // call get debate to fetch the debate by id
	   		         .then(function(res) {
		   		           console.log("IN INDEX BOOKS AFTER");
		   		           vm.books =  res.data; // return the JSON data of the fetched debate.
		   		         })
				});
			});
		}
		
		if(showEdit){
			bookService.editBook(book.id, book).then(function(res) {
				console.log("UPDATED: ",res.data);
				bookService.indexBooks() // call get debate to fetch the debate by id
  		         .then(function(res) {
	   		           console.log("IN INDEX BOOKS AFTER");
	   		           vm.books =  res.data; // return the JSON data of the fetched debate.
	   		         })
			});
		}
	}
	
	vm.deleteBook = function(id){
		bookService.deleteBook(id)
		.then(function(res) {
			console.log("DELETED",res.data);
			bookService.indexBooks() // call get debate to fetch the debate by id
		         .then(function(res) {
  		           console.log("IN INDEX BOOKS AFTER");
  		           vm.books =  res.data; // return the JSON data of the fetched debate.
  		         })
		})
	}
}

app.component("crudComponent", {

	template : `

		<div class = "container-fluid">
		   <form id="crud-book" name="libForm" novalidate>
		      <div>
		         <div class="col-sm-12 col-md-5 noPadNoMorg-sm">
		            <div class="settings-button-box inline-block hidden-sm hidden-xs">
		               <div class="inline-block">
			                  <button class="btn btn-primary libButton" ng-hide="showNew || showEdit || showDelete" ng-disabled="libForm.$invalid" 
			                     ng-click="showNew = true; $ctrl.book = null">
			                  Add Book</button>
			                  <button class="btn btn-primary libButton" ng-hide="showNew || showEdit || showDelete" ng-disabled="$ctrl.book.name === undefined || $ctrl.book.name === null" 
			                     ng-click="showEdit = true; $ctrl.logSelection($ctrl.book)">
			                  Edit Quantity</button>
			                  <button class="btn btn-primary libButton" ng-hide="showNew || showEdit || showDelete" ng-disabled="$ctrl.book.name === undefined || $ctrl.book.name === null"
			                     ng-click="showDelete = true">
			                  Delete Book</button>
			                  <button class="btn btn-primary libButton" ng-show="showNew || showEdit" ng-disabled="libForm.$invalid" 
			                     ng-click="$ctrl.editBook($ctrl.book, showNew, showEdit); showNew = false; showEdit = false">
			                  Save Book</button>
			                  <button class="btn btn-primary libButton" ng-show="showDelete" ng-disabled="$ctrl.book.name === undefined || $ctrl.book.name === null || $ctrl.book.issued>0"
			                     ng-click="showDelete = false; $ctrl.deleteBook($ctrl.book.id)">
			                  DELETE</button>
			                  <button class="btn btn-primary libButton" ng-show="showNew || showEdit || showDelete" ng-disabled="libForm.$invalid" 
			                     ng-click="showNew = false; showEdit = false; showDelete = false; $ctrl.logSelection($ctrl.book)">
			                  Cancel</button>
		               </div>
		               <div class="inline-block invalid-box">
							<span ng-show="showDelete && $ctrl.book.issued === 0">
								<p class="invalid">ARE YOU SURE YOU WANT TO DELETE "{{$ctrl.book.name}}"?</p>
							</span>
				            <span ng-show="showDelete && $ctrl.book.issued>0">
				               <p class="invalid">Books cannot be deleted if any are still out.</p>
				            </span>
				            <span ng-show="libForm.issDesc.$dirty && libForm.issDesc.$invalid">
				               <p class="invalid">Issue description must be between 6 and 255 characters.</p>
				            </span>
		               </div>
		            </div>
		         </div>
		         
		         <div>
				 	<edit-component cats="$ctrl.cats" book="$ctrl.book" ng-show="showEdit"><edit-component>
		         </div>
		         <div>
		         	<new-component cats="$ctrl.cats" book="$ctrl.book" ng-show="showNew"><new-component>
		         </div> 
		         <div>
		         	<delete-component cats="$ctrl.cats" book="$ctrl.book" ng-show="showDelete"><delete-component>
		         </div> 
		            
		      </div>
		      
		      <div class="col-sm-12 noPadNoMorg-sm hidden-md hidden-lg hidden-xl">
		         <div class="center settings-button-box">
	                  <button class="btn btn-primary libButton" ng-hide="showNew || showEdit || showDelete" ng-disabled="libForm.$invalid" 
	                     ng-click="showNew = true; $ctrl.book = null">
	                  Add Book</button>
	                  <button class="btn btn-primary libButton" ng-hide="showNew || showEdit || showDelete" ng-disabled="$ctrl.book.name === undefined || $ctrl.book.name === null" 
	                     ng-click="showEdit = true; $ctrl.logSelection($ctrl.book)">
	                  Edit Quantity</button>
	                  <button class="btn btn-primary libButton" ng-hide="showNew || showEdit || showDelete" ng-disabled="$ctrl.book.name === undefined || $ctrl.book.name === null"
	                     ng-click="showDelete = true">
	                  Delete Book</button>
	                  <button class="btn btn-primary libButton" ng-show="showNew || showEdit" ng-disabled="libForm.$invalid" 
	                     ng-click="$ctrl.editBook($ctrl.book, showNew, showEdit); showNew = false; showEdit = false">
	                  Save Book</button>
	                  <button class="btn btn-primary libButton" ng-show="showDelete" ng-disabled="$ctrl.book.name === undefined || $ctrl.book.name === null || $ctrl.book.issued>0"
	                     ng-click="showDelete = false; $ctrl.deleteBook($ctrl.book.id)">
	                  DELETE</button>
	                  <button class="btn btn-primary libButton" ng-show="showNew || showEdit || showDelete" ng-disabled="libForm.$invalid" 
	                     ng-click="showNew = false; showEdit = false; showDelete = false; $ctrl.logSelection($ctrl.book)">
	                  Cancel</button>
		         </div>
		         <div class="center invalid-box">
					<span ng-show="showDelete && $ctrl.book.issued === 0">
						<p class="invalid">ARE YOU SURE YOU WANT TO DELETE "{{$ctrl.book.name}}"?</p>
					</span>
		            <span ng-show="showDelete && $ctrl.book.issued>0">
		               <p class="invalid">Books cannot be deleted if any are still out.</p>
		            </span>
		            <span ng-show="libForm.issDesc.$dirty && libForm.issDesc.$invalid">
		               <p class="invalid">Issue description must be between 6 and 255 characters.</p>
		            </span>
		         </div>
		      </div>
			</div>
		</form>
	</div>

	`,
	controller : crudController,
	bindings : {
		cats : "=",
		book : "=",
		books : "="
	}

});
