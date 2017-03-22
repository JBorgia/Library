var app = angular.module('ngLibrary');


function editController(authorService, bookService, authenticationService, $scope, $location){
	var vm = this;

}

app.component("editComponent", {

	template : `

		         <div class="col-sm-12 col-md-7 noPadNoMorg-sm settings-box-container">
		         
		            <div class="settings-box">
                       <div class="settings-left">
			               <img class="settings-icon" src="./assets/img/book-icon-grey.png"></img>
			               <label class="settings-label">Title</label>
		               </div>
                       <div class="settings-right">
							<p type="text" class="right" ng-model="$ctrl.book.name">{{$ctrl.book.name}}</p>
		               </div>
		            </div>
		         
		            <div class="settings-box">
                       <div>
			               <img class="settings-icon" src="./assets/img/author-icon.png"></img>
			               <label class="settings-label">Author</label>
		               </div>
                       <div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>First Name</label>
								</div>
								<div class="author-right">
									<p type="text" name="first" class="right" ng-model="$ctrl.book.author.first">{{$ctrl.book.author.first}}</p>
								</div>
							</div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>Middle Name</label>
								</div>
								<div class="author-right">
									<p type="text" name="middle" class="right" ng-model="$ctrl.book.author.middle">{{$ctrl.book.author.middle}}</p>
								</div>
							</div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>Last Name</label>
								</div>
								<div class="author-right">
									<p type="text" name="last" class="right" ng-model="$ctrl.book.author.last">{{$ctrl.book.author.last}}</p>
								</div>
							</div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>Date of Birth</label>
								</div>
								<div class="author-right right">
									<p type="text" class="right" ng-model="$ctrl.book.author.birth">{{$ctrl.book.author.birth | date:'mediumDate'}}</p>
								</div>
							</div>
                       		<div class="author-box">
                       			<div class="author-left">
									<label>Date of Death</label>
								</div>
								<div class="author-right right">
									<p type="text" class="right" ng-model="$ctrl.book.author.death">{{$ctrl.book.author.death | date:'mediumDate'}}</p>
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
							<p class="right" ng-model="$ctrl.book.isbn">{{$ctrl.book.isbn}}</p>
		               </div>
		            </div>
		         
		            <div class="settings-box">
                       <div class="settings-left">
			               <img class="settings-icon" src="./assets/img/quantity-icon.png" ></img>
			               <label class="settings-label">Quantity</label>
		               </div>
                       <div class="settings-right right">
							<input id="quantity-selector" type="number" min="{{$ctrl.book.issued}}" class="settings-selector right" ng-model="$ctrl.book.quantity" />
		               </div>
		            </div>
		            
		            
					<div class="settings-box">
                       <div class="settings-left">
							<img class="settings-icon" src="./assets/img/category-icon.png"></img>
							<label class="settings-label">Category</label>
		               </div>
                       <div class="settings-right right">
							<p id="category-selector" class="right" ng-model="$ctrl.book.category">{{$ctrl.book.category.name}}</p>
		               </div>
					</div>
		            
		            <div class="settings-box">
                       <div id="pubDate-wrapper" class="settings-left">
			               <img class="settings-icon" src="./assets/img/calendar-icon.png" ></img>
			               <label class="settings-label">Publication Date</label>
		               </div>
                       <div class="settings-right right">
							<p type="text" class="right" ng-model="$ctrl.book.pubDate">{{$ctrl.book.pubDate | date:'mediumDate'}}</p>
		               </div>
		            </div>
		         
		         </div>

	`,
	controller : editController,
	bindings : {
		cats : "=",
		book : "="
	}

});
