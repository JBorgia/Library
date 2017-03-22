var app = angular.module('ngLibrary');

function navController(authenticationService) {
  var vm = this;
  vm.isCollapsed = true;

	
	vm.sortBy = function(propertyName) {
	    vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
	    vm.propertyName = propertyName;
	    console.log("PROPERY NAME: ",vm.propertyName);
	    console.log("REVERSE VALUE: ",vm.reverse);
    };
}

app.component('navComponent',{
  template: ` <div>
				<nav class="navbar navbar-default navigation-clean">
				    <div class="container-fluid">
				        <div class="navbar-header">
				        
                        <a class="navbar-brand-icon navbar-link" href="#!/"><img src="assets/img/library-icon-yellow.png"></a>
				        <a href="#" class="navbar-brand navbar-link">Angular Library</a>
				            <button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggle collapsed" ng-click="$ctrl.isCollapsed = !$ctrl.isCollapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
				        </div>
				        <div class="collapse navbar-collapse" uib-collapse="$ctrl.isCollapsed" id="navcol-1">
				            <ul class="nav navbar-nav navbar-right">
				                <li class="dropdown" uib-dropdown keyboard-nav><a class="dropdown-toggle" uib-dropdown-toggle aria-expanded="$ctrl.isCollapsed" href="#">Sort by <span class="caret"></span></a>
	  								<ul class="dropdown-menu" uib-dropdown-menu role="menu">
				                        <li role="presentation"><a ng-click="$ctrl.sortBy('name')">Title</a></li>
				                        <li role="presentation"><a ng-click="$ctrl.sortBy('author.last')">Author, Last</a></li>
				                        <li role="presentation"><a ng-click="$ctrl.sortBy('author.first')">Author, First</a></li>
				                        <li role="presentation"><a ng-click="$ctrl.sortBy('category')">Category</a></li>
				                        <li role="presentation"><a ng-click="$ctrl.sortBy('isbn')">ISBN</a></li>
									</ul>
	  							</li>
				            </ul>
				        </div>
				    </div>
				</nav>
              </div>`,

  controller : navController,
  bindings : {
		books : "<",
		propertyName : "=",
		reverse : "="
  }
});
