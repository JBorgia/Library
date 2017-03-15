angular.module('ngLibrary').component("aboutComponent", {
	template : `
		<nav-component></nav-component>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-12">
					<article>
						<h2>Angular Library</h2>
						<h4>An exercise in AngularJS, HTML5, CSS3, JavaScript, SpringREST, JAVA, and MySQL.</h4>
	
						<div class="row">
							<div class="col-sm-12 col-md-6">
								<img src="/SyneChronWEB/WebContent/assets/img/library-icon.png" alt="library building" id="about-icon">
							</div>
		
							<div class="col-sm-12 col-md-6">
								<p>This <b>Angular Library</b> was built using AngularJS, HTML5, CSS3, JavaScript (along with a couple of libraries) on the front-end.
								The web facing portion is then linked through APIs built in Spring to a Java managed back-end. Data is stored in a MySQL database and
								managed by Java through Hibernate and Jackson dependencies tied in using Maven.</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	`

});
