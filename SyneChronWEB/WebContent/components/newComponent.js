var app = angular.module('ngLibrary');


function newController(authorService, bookService, authenticationService, $scope, $location){
	var vm = this;

}

app.component("newComponent", {

	template : `

		         <div class="col-sm-12 col-md-7 noPadNoMorg-sm settings-box-container">
		         
		            <div class="settings-box">
                       <div class="settings-left">
			               <img class="settings-icon" src="./assets/img/book-icon-grey.png" ></img>
			               <label class="settings-label">Title</label>
		               </div>
                       <div class="settings-right">
							<input type="text" class="settings-selector" ng-model="$ctrl.book.name">
		               </div>
		            </div>
		         
		            <div class="settings-box">
                       <div>
			               <img class="settings-icon" src="./assets/img/author-icon.png" ></img>
			               <label class="settings-label">Author</label>
		               </div>
                       <div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>First Name</label>
								</div>
								<div class="author-right">
									<input type="text" name="first" class="settings-selector" ng-model="$ctrl.book.author.first">
								</div>
							</div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>Middle Name</label>
								</div>
								<div class="author-right">
							<input type="text" name="middle" class="settings-selector" ng-model="$ctrl.book.author.middle">
								</div>
							</div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>Last Name</label>
								</div>
								<div class="author-right">
							<input type="text" name="last" class="settings-selector" ng-model="$ctrl.book.author.last">
								</div>
							</div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>Date of Birth</label>
								</div>
								<div class="author-right right">
									<input type="date" id="birthDate-selector" name="birth" class="settings-selector" ng-model="$ctrl.book.author.birth">
								</div>
							</div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>Date of Death</label>
								</div>
								<div class="author-right right">
									<input type="date" id="deathDate-selector" name="death" class="settings-selector" ng-model="$ctrl.book.author.death">
								</div>
							</div>
		               </div>
		            </div>
		         
		            <div class="settings-box">
                       <div class="settings-left">
			               <img class="settings-icon" src="./assets/img/isbn-icon.png" ></img>
			               <label class="settings-label">ISBN</label>
		               </div>
                       <div class="settings-right right">
							<input id="isbn-selector"  type="text" class="settings-selector" ng-model="$ctrl.book.isbn">
		               </div>
		            </div>
		         
		            <div class="settings-box">
                       <div class="settings-left">
			               <img class="settings-icon" src="./assets/img/quantity-icon.png" ></img>
			               <label class="settings-label">Quantity</label>
		               </div>
                       <div class="settings-right right">
							<input id="quantity-selector" type="number" min="{{$ctrl.book.issued}}" class="settings-selector" ng-model="$ctrl.book.quantity">
		               </div>
		            </div>
		            
		            
					<div class="settings-box">
                       <div class="settings-left">
							<img class="settings-icon" src="./assets/img/category-icon.png"></img>
							<label class="settings-label">Category</label>
		               </div>
                       <div class="settings-right right">
							<select id="category-selector" class="settings-selector" ng-model="$ctrl.book.category" ng-options="cat.name for cat in $ctrl.cats track by cat.id">
							</select>
		               </div>
					</div>
		            
		            <div class="settings-box">
                       <div id="pubDate-wrapper" class="settings-left">
			               <img class="settings-icon" src="./assets/img/calendar-icon.png" ></img>
			               <label class="settings-label">Publication Date</label>
		               </div>
                       <div class="settings-right right">
							<input id="pubDate-selector" type="date" class="settings-selector" ng-model="$ctrl.book.pubDate">
		               </div>
		            </div>
		         
		         </div>

	`,
	controller : newController,
	bindings : {
		cats : "=",
		book : "="
	}

});
