var app = angular.module('ngLibrary');

function navController(authenticationService) {
  var vm = this;


}

app.component('navComponent',{
  template: ` <div>
				<nav class="navbar navbar-default navbar-fixed-top navigation-clean">
				    <div class="container-fluid">
				        <div class="navbar-header"><a href="#" class="navbar-brand navbar-link">Angular Library</a>
				            <button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
				        </div>
				        <div class="collapse navbar-collapse" id="navcol-1">
				            <ul class="nav navbar-nav navbar-right">
				                <li class="dropdown"><a data-toggle="dropdown" aria-expanded="false" href="#" class="dropdown-toggle">Sort By<span class="caret"></span></a>
				                    <ul role="menu" class="dropdown-menu">
				                        <li role="presentation"><a href="#">Title</a></li>
				                        <li role="presentation"><a href="#">Author, Last</a></li>
				                        <li role="presentation"><a href="#">Author, First</a></li>
				                        <li role="presentation"><a href="#">Category</a></li>
				                        <li role="presentation"><a href="#">ISBN</a></li>
				                    </ul>
				                </li>
				            </ul>
				        </div>
				    </div>
				</nav>
              </div>`,

  controller : navController

});
