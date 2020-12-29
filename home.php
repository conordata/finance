<!DOCTYPE html>
<html lang="en" dir="ltr">

<?php session_start(); ?>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>GFI - Pro | Home</title>


	<link type="text/css" href="assets/css/vendor-morris.css" rel="stylesheet">
	<link type="text/css" href="assets/css/vendor-bootstrap-datepicker.css" rel="stylesheet">

	<!-- Prevent the demo from appearing in search engines -->
	<meta name="robots" content="noindex">

	<!-- App CSS -->
	<link type="text/css" href="assets/css/app.css" rel="stylesheet">
	<link type="text/css" href="assets/css/app.rtl.css" rel="stylesheet">

	<!-- Simplebar -->
	<link type="text/css" href="assets/vendor/simplebar.css" rel="stylesheet">

</head>

<body>
  <div class="mdk-drawer-layout js-mdk-drawer-layout" data-fullbleed data-push data-responsive-width="992px" data-has-scrolling-region>

    <div class="mdk-drawer-layout__content">
      <!-- header-layout -->
      <div class="mdk-header-layout js-mdk-header-layout  mdk-header--fixed  mdk-header-layout__content--scrollable">
        <!-- header -->
        <div class="mdk-header js-mdk-header bg-primary" data-fixed>
          <div class="mdk-header__content">
            <nav class="navbar navbar-expand-md bg-primary navbar-dark d-flex-none">
              <button class="btn btn-link text-white pl-0" type="button" data-toggle="sidebar">
                <i class="material-icons align-middle md-36">short_text</i>
              </button>
              <div class="page-title m-0">Accueil</div>

              <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav ml-auto align-items-center">
                  <li class="nav-item nav-link">
                    <div class="form-group m-0">
                      <div class="input-group input-group--inline">
                        <div class="input-group-addon">
                          <i class="material-icons">search</i>
                        </div>
                        <input type="text" class="form-control" name="search" placeholder="Entrer ID">
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown nav-language d-flex align-items-center">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">FR</a>
                    <div class="dropdown-menu dropdown-menu-right ">
                      <ul class="list-unstyled">
                        <li>
                          <a href="account.html" class="dropdown-item active"><img src="assets/images/flag_uk.jpg" style="width: 25px; height: 16px; vertical-align: middle" alt="English"> English</a>
                        </li>
                        <li>
                          <a href="account.html" class="dropdown-item"><img src="assets/images/flag_france.jpg" style="width: 25px; height: 16px; vertical-align: middle" alt="French"> French</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item dropdown notifications d-flex align-self-center align-items-center" id="navbarNotifications">
                    <a href="#" class="nav-link dropdown-toggle notifications--active" data-toggle="dropdown" aria-expanded="false"><i class="material-icons align-middle">notifications</i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notificationsDropdown" id="notificationsDropdown">
                      <ul class="nav nav-tabs-notifications d-flex px-0" id="notifications-ul" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" id="notifications-tab" data-toggle="tab" href="#notifications" role="tab" aria-controls="notifications" aria-selected="true">Notifications</a>
                        </li>
                      </ul>
                      <div class="tab-content" id="notifications-tabs">
                        <div class="tab-pane fade show active" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              <div class="w-100">
                                <a href="#">john</a> received a new quote
                              </div>
                              <div class="w-100 text-muted">4 secs ago</div>
                            </li>
                            <li class="list-group-item text-right">
                              <a href="#">
                                <span class="align-middle">View All</span>
                                <i class="material-icons md-18 align-middle">arrow_forward</i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item nav-divider">
                    <?php include_once 'commons/header.php';?>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

      	<!-- content -->
      	<div class="mdk-header-layout__content top-navbar mdk-header-layout__content--scrollable h-100">
      		<div class="container-fluid">
      			<div class="row font-1">
							<div class="col-lg-12">
								<div class="card card-body flex-row align-items-center">
									<h5 class="m-0"><i class="material-icons align-middle text-muted md-24">access_time</i> Current time</h5>
									<div class="text-primary ml-auto">May 14, 2020 | 1:52:10 PM</div>
								</div>
							</div>
						</div>

      			<div class="row">
      				<div class="col-md-4 col-lg-4">
								<div class="card">
									<a href="book.php">
										<img src="assets/images/task1.jpg" class="card-img" alt="property">
									</a>
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-center mb-0">
											<a href="book.php" class="h5 text-primary-dark mb-0">Carnet de Reçu</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 col-lg-4">
								<div class="card">
									<a href="rapport.php">
										<img src="assets/images/task6.jpg" class="card-img" alt="property">
									</a>
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-center mb-0">
											<a href="rapport.php" class="h5 text-primary-dark mb-0">Rapport Global de Finance</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 col-lg-4">
								<div class="card">
									<a href="bon_entree.php">
										<img src="assets/images/task3.jpg" class="card-img" alt="property">
									</a>
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-center mb-0">
											<a href="bon_entree.php" class="h5 text-primary-dark mb-0">Bon d'entrée</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 col-lg-4">
								<div class="card">
									<a href="bon_de_sortie.php">
										<img src="assets/images/task4.jpg" class="card-img" alt="property">
									</a>
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-center mb-0">
											<a href="bon_de_sortie.php" class="h5 text-primary-dark mb-0">Bon de Sortie</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 col-lg-4">
								<div class="card">
									<a href="registre.php">
										<img src="assets/images/task5.jpg" class="card-img" alt="property">
									</a>
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-center mb-0">
											<a href="registre.php" class="h5 text-primary-dark mb-0">Registres des Gestion</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 col-lg-4">
								<div class="card">
									<a href="property.html">
										<img src="assets/images/task2.jpg" class="card-img" alt="property">
									</a>
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-center mb-0">
											<a href="property.html" class="h5 text-primary-dark mb-0">Bulletin de Paie Agent</a>
										</div>
									</div>
								</div>
							</div>
						</div>
      		</div>
      	</div>
      </div>
		</div>
		<!-- // END drawer-layout__content -->

<!-- drawer -->
        <?php include_once 'commons/navigation.php';?>
</div>
<!-- // END drawer -->

<!-- drawer -->
	<?php include_once 'commons/parametres.php';?>
<!-- // END drawer -->

</div>
<!-- // END drawer-layout -->



<!-- jQuery -->
<script src="assets/vendor/jquery.min.js"></script>

<!-- Bootstrap -->
<script src="assets/vendor/popper.js"></script>
<script src="assets/vendor/bootstrap.min.js"></script>

<!-- Simplebar -->
<!-- Used for adding a custom scrollbar to the drawer -->
<script src="assets/vendor/simplebar.js"></script>


<!-- Vendor -->
<script src="assets/vendor/Chart.min.js"></script>
<script src="assets/vendor/moment.min.js"></script>

<!-- APP -->
<script src="assets/js/color_variables.js"></script>
<script src="assets/js/app.js"></script>


<script src="assets/vendor/dom-factory.js"></script>
<!-- DOM Factory -->
<script src="assets/vendor/material-design-kit.js"></script>
<!-- MDK -->



<script>
(function() {
'use strict';
// Self Initialize DOM Factory Components
domFactory.handler.autoInit()


// Connect button(s) to drawer(s)
var sidebarToggle = document.querySelectorAll('[data-toggle="sidebar"]')

sidebarToggle.forEach(function(toggle) {
toggle.addEventListener('click', function(e) {
var selector = e.currentTarget.getAttribute('data-target') || '#default-drawer'
var drawer = document.querySelector(selector)
if (drawer) {
if (selector == '#default-drawer') {
$('.container-fluid').toggleClass('container--max');
}
drawer.mdkDrawer.toggle();
}
})
})
})()
</script>


<script src="assets/vendor/morris.min.js"></script>
<script src="assets/vendor/raphael.min.js"></script>
<script src="assets/vendor/bootstrap-datepicker.min.js"></script>
<script src="assets/js/datepicker.js"></script>




</body>

</html>