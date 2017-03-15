var app = angular.module('ngLibrary');

function bookController(bookService, authenticationService){

	var vm = this;
	vm.logged = function(){
		return authenticationService.isLoggedIn();
	}
	vm.cats;
	vm.issues;
	vm.debates;
	vm.filterCats = [];
	  vm.userinfo = authenticationService.currentUser();


	bookService.indexBooks()
		.then(function(res) {
			    vm.cats = res.data;
			    console.log("IN .indexBooks");
			    console.log(vm.cats);
			})

	bookService.indexCategories()
		.then(function(res) {
		    console.log("IN .indexIssues");
		    vm.issues = res.data;
		    console.log(vm.issues);
		})

}
	

app.component('bookComponent',{
	template: `<nav-component></nav-component>

		<h5 id="filterHeader">Filter by:</h5>
			<div class="col-lg-12">
				<book ng-repeat="cat in $ctrl.cats | orderBy:'title'">
				    <div class="inline-field">
				        <label for="{{cat.title}}">{{cat.title}} </label>
				        <input id="{{cat.title}}" type="checkbox" ng-click="$ctrl.addCat(cat)">
				    </div>
				</book>
			</div>
		<br><br>
		<div class="container-fluid noPadNoMarg">
	    <div class="row noPadNoMarg">
		      <v-accordion class="vAccordion--default">
						<div class="col-sm-12 col-md-6">
							<v-pane ng-repeat="deb in $ctrl.debates" ng-if="$index<$ctrl.debates.length/2">
								<v-pane-header ng-click="hideButtons = !hideButtons" class="book-header" >
									<div class="cat-wrapper">
										<div class="book-left">
											<img src="assets/img/Quib-Logo-WHITE.png" ngclass="$root.bodylayout" class="quibPaneImage">
										</div>
										<div class="book-right">
											<h4> Issue: <i>{{deb.issue.title}}</i></h4>
											<h5>Description: <i>{{deb.issue.description}}</i></h5>
										</div>
									</div>
								</v-pane-header>
								<v-pane-content>
									<div class="vPaneContentWrapper">
										<span ng-show="{{deb.performances.length}} < 2 && $ctrl.logged() && $ctrl.isNotParticipant(deb.performances.perfMembers)">
											<a href="#!/join/{{deb.id}}"><button class="quibButton">Join</button></a>
										</span>
										<a href="#!/debate/{{deb.id}}">
											<button class="quibButton">View</button>
										</a>

										<div class="desc-wrapper">
											<div class="desc-left">
												<h4>Reference: </h4>
											</div>
											<div class="desc-right">
												<div ng-repeat="cat in $ctrl.getCats(deb.issue.issCats)"><a href="{{deb.issue.linkRef}}">{{deb.issue.linkRef}}</a></div>
											</div>
										</div>

										<div class="desc-wrapper">
											<div class="desc-left">
												<h4>Categories: </h4>
											</div>
											<div class="desc-right">
												<div ng-repeat="cat in $ctrl.getCats(deb.issue.issCats)">{{cat.title}} </div>
											</div>
										</div>

										<div class="desc-wrapper">
											<div class="desc-left">
												<h4>Stances: </h4>
											</div>
											<div class="desc-right">
												<div>
													<ol>
														<li ng-repeat="per in deb.performances">{{per.stance}}</li>
													</ol>
												</div>
											</div>
										</div>

									</div>
								</v-pane-content>
			     		</v-pane>
						 </div>
	 						<div class="col-sm-12 col-md-6">
	 							<v-pane ng-repeat="deb in $ctrl.debates" ng-if="$index>=$ctrl.debates.length/2">
									<v-pane-header ng-click="hideButtons = !hideButtons" class="book-header" >
										<div class="cat-wrapper">
											<div class="book-left">
												<img src="assets/img/Quib-Logo-WHITE.png" ngclass="$root.bodylayout" class="quibPaneImage">
											</div>
											<div class="book-right">
												<h4> Issue: <i>{{deb.issue.title}}</i></h4>
												<h5>Description: <i>{{deb.issue.description}}</i></h5>
											</div>
										</div>
									</v-pane-header>
									<v-pane-content>
										<div class="vPaneContentWrapper">
										<span ng-show="{{deb.performances.length}} < 2 && $ctrl.logged() && $ctrl.isNotParticipant(deb.performances)">
												<a href="#!/join/{{deb.id}}"><button class="quibButton">Join</button></a>
											</span>
											<a href="#!/debate/{{deb.id}}">
												<button class="quibButton">View</button>
											</a>

											<div class="desc-wrapper">
												<div class="desc-left">
													<h4>Reference: </h4>
												</div>
												<div class="desc-right">
													<div ng-repeat="cat in $ctrl.getCats(deb.issue.issCats)"><a href="{{deb.issue.linkRef}}">{{deb.issue.linkRef}}</a></div>
												</div>
											</div>

											<div class="desc-wrapper">
												<div class="desc-left">
													<h4>Categories: </h4>
												</div>
												<div class="desc-right">
													<div ng-repeat="cat in $ctrl.getCats(deb.issue.issCats)">{{cat.title}} </div>
												</div>
											</div>

											<div class="desc-wrapper">
												<div class="desc-left">
													<h4>Stances: </h4>
												</div>
												<div class="desc-right">
													<div>
														<ol>
															<li ng-repeat="per in deb.performances">{{per.stance}}</li>
														</ol>
													</div>
												</div>
											</div>

										</div>
									</v-pane-content>
				     		</v-pane>
							 </div>
			     </v-accordion>
			 </div>
		 </div>`,

	controller : bookController
 });
