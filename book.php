<!DOCTYPE html>
<html lang="en" dir="ltr">

<?php
    if(!isset($_SESSION))
    {
        session_start();
    }
	
	require "database_exec/database.php";
	require "database_exec/book.php";

	$activities=Book::get_all_book();

	$cdf=0;
	$usd=0;

	foreach ($activities as $montant) {
		if ($montant['devise']=='CDF') {
			$cdf=$cdf+$montant['montant'];
		}

		else $usd=$usd+$montant['montant'];
	}

?>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>GFI - Pro | Book</title>


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
              <div class="page-title m-0">Carnet de reçu</div>

              <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav ml-auto align-items-center">
                	<li class="nav-item nav-link">
										<a class="btn btn-white" href="home.php">
											<i class="material-icons align-middle md-18">chevron_left</i>Accueil</a>
									</li>
                  <li class="nav-item nav-link">
                    <div class="form-group m-0">
                      <form method="POST" action="#" class="input-group input-group--inline">
                        <input type="text" class="form-control" name="search" placeholder="Entrer ID">
                        <button style="background:none; border:none; color:white;" type="submit" class="ml-2 mt-1" name="id_search"><i class="material-icons">search</i></button>
                      </form>
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
						<div class="row align-items-center mb-3">
							<div class="col-md-6">
								<form class="d-md-flex new-order">
									<a href="recu.php" class="btn btn btn-primary mb-2">
										<i class="material-icons md-18 align-middle">add_to_photos</i>
										<span class="align-middle">Nouveau Reçu</span>
									</a>
									<a href="recu.php" class="btn btn btn-success ml-2 mr-2 mb-2">
										<i class="material-icons md-18 align-middle">print</i>
										<span class="align-middle">Imprimer</span>
									</a>
								</form>
							</div>
							<div class="col-md-6">
								<form class="d-md-flex justify-content-end new-order">
									<a href="purchase-order.html" class="btn btn btn-outline-success mb-2">
										<i class="material-icons md-18 align-middle">grid_on</i>
										<span class="align-middle">Voir dans Excel</span>
									</a>
								</form>
							</div>
						</div>
						<div class="card">
							<div class="card-header">
								<div class="row align-items-center">
									<div class="col-md-2">
										<h5 class="m-0">ACTIVITES</h5>
									</div>
									<div class="col-md-10 d-flex justify-content-md-end">
										<div class="dropdown mr-4">
											<button class="btn btn-white dropdown-toggle" type="button" id="filterOrdersDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Trier </button>
											<div class="dropdown-menu" aria-labelledby="filterOrdersDropdown">
												<a class="dropdown-item" href="#">Minerval</a>
												<a class="dropdown-item" href="#">Frais de l'Etat</a>
												<a class="dropdown-item" href="#">Examen</a>
												<a class="dropdown-item" href="#">Autres</a>
											</div>
										</div>
										<form method="POST" action="#" class="form-inline">
											<div class="form-group mr-3">
												<label class="control-label mr-1">Du:</label>
												<input type="date" class="form-control" value=<?php  echo (date("Y-m-d", time()));?>>
											</div>
											<div class="form-group mr-2">
												<label class="control-label mr-1">Au: </label>
												<input type="date" class="form-control" value=<?php  echo (date("Y-m-d", time()));?>>
											</div>
											<div class="form-group mb-0 mr-0">
												<input type="submit" class="form-control btn btn-primary" value="OK" name="date">
											</div>
										</form>
									</div>
								</div>
							</div>
							<div class="row font-1">
								<div class="col-lg-12">
									<div class="card card-body flex-row align-items-center">
										<h4 class="m-0">Montant total</h4>
										<div class="badge badge-primary ml-auto"><h4 class="mt-1 mb-0"><?php echo (number_format($cdf,2)) ?> CDF | <?php echo (number_format($usd,2)) ?> USD</h4></div>
									</div>
								</div>
							</div>
							<div class="table-responsive">
								<table class="table m-0">
									<thead>
										<tr class="bg-fade">
											<th style="width: 40px;">#</th>
											<th style="width: 120px;">Date</th>
											<th style="width: 120px;">N* Reçu</th>
											<th>Identifiant</th>
											<th style="width: 140px;">Montant</th>
											<th style="width: 140px;">Motif</th>
											<th style="width: 100px">Signature</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
								<?php

									$list_length=count($activities);
									$i=0;
									while ($i<$list_length) {
								?>
										<tr>
											<td class="align-middle"><?php echo ($i+1); ?></td>
											<td class="align-middle"><?php echo ($activities[$i]["date_payment"]); ?></td>
											<td class="align-middle">N<?php echo (sprintf("%04d", $activities[$i]["numero_recu"])); ?></td>
											<td class="align-middle">
												<div>
													<i class="material-icons align-middle md-18 text-link-color">contacts</i> <a href="#"><?php echo (strtoupper($activities[$i]["id_eleve"])); ?></a>
													<em class="text-muted ml-1">
														<?php 
															echo '('.(ucfirst($activities[$i]["nom"]).' '.ucfirst($activities[$i]["post_nom"]).' '.ucfirst($activities[$i]["prenom"])).')'; 
														?>		
													</em>
												</div>
											</td>
											<td class="align-middle"><a href="#"><?php echo (number_format($activities[$i]["montant"],2))." ".$activities[$i]["devise"]; ?></a></td>
											<td class="align-middle">
												<div class="badge badge-info"><?php if ($activities[$i]["motif_name"]=='') {echo (ucfirst($activities[$i]["motif"]));} else echo (ucfirst($activities[$i]["motif_name"])); ?></div>
											</td>
											<td class="align-middle">
												<div class="badge badge-warning"><?php echo (strtoupper($activities[$i]["signature"])); ?></div>
											</td>
											<td class="align-middle" style="width:40px">
												<a class="btn btn-white btn-sm" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons md-18 align-middle">more_vert</i></a>
												<div class="dropdown-menu">
													<a class="dropdown-item" href="#">
														<i class="material-icons md-14 align-middle">edit</i>
														<span class="align-middle">Modifier</span>
													</a>
													<div class="dropdown-divider"></div>
													<a class="dropdown-item text-danger" href="#">
														<i class="material-icons md-14 align-middle">delete</i>
														<span class="align-middle">Delete</span>
													</a>
												</div>
											</td>
										</tr>
								<?php
										$i++;
									}
								?>
									</tbody>
								</table>
							</div>
						</div>
      		</div>
      	</div>
      </div>
		</div>
		<!-- // END drawer-layout__content -->


<!-- drawer -->
<div class="mdk-drawer js-mdk-drawer" id="default-drawer">
	<div class="mdk-drawer__content">
		<div class="mdk-drawer__inner" data-simplebar data-simplebar-force-enabled="true">
			<nav class="drawer  drawer--dark">
				<div class="drawer-spacer">
					<div class="media align-items-center">
						<a href="index.html" class="drawer-brand-circle mr-2">C</a>
						<div class="media-body">
							<a href="home.php" class="h4 m-0 text-link">Cherad - Finance</a>
						</div>
					</div>
				</div>
				<!-- MENU -->
				<ul class="drawer-menu" id="dasboardMenu" data-children=".drawer-submenu">
					<li class="drawer-menu-item">
						<a href="home.php">
							<i class="material-icons">dashboard</i>
							<span class="drawer-menu-text"> Accueil</span>
						</a>
					</li>
					<li class="drawer-menu-item">
						<a href="#">
							<i class="material-icons">gradient</i>
							<span class="drawer-menu-text"> Calculatrice</span>
						</a>
					</li>
					<li class="drawer-menu-item">
						<a href="taux_frais.php">
							<i class="material-icons">account_balance</i>
							<span class="drawer-menu-text"> Taux & Frais</span>
						</a>
					</li>
					<li class="drawer-menu-item">
						<a href="events-calendar.html">
							<i class="material-icons">event_available</i>
							<span class="drawer-menu-text"> Calendrier</span>
						</a>
					</li>
					<li class="drawer-menu-item  ">
						<a href="#">
							<i class="material-icons">notifications</i>
							<span class="drawer-menu-text"> Notifications</span>
						</a>
					</li>
					<li class="drawer-menu-item">
						<a href="maps.html">
							<i class="material-icons">pin_drop</i>
							<span class="drawer-menu-text"> Localisation</span>
						</a>
					</li>
					<li class="drawer-menu-item">
						<a href="#">
							<i class="material-icons">receipt</i>
							<span class="drawer-menu-text"> Tâches</span>
						</a>
						<div>
							<li class="drawer-menu-item ">
								<a href="bon_entree.php">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Bon d'entrée</span>
								</a>
							</li>
							<li class="drawer-menu-item">
								<a href="bon_de_sortie.php">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Bon de Sortie</span>
								</a>
							</li>
							<li class="drawer-menu-item ">
								<a href="#">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Bulletin de Paie</span>
								</a>
							</li>
							<li class="drawer-menu-item drawer-submenu active">
								<a href="book.php" data-toggle="collapse" data-parent="#mainMenu" data-target="#uiComponentsMenu" aria-controls="uiComponentsMenu" aria-expanded="false" class="collapsed">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Carnet de Reçu</span>
								</a>
								<ul class="collapse" id="uiComponentsMenu">
									<li class="drawer-menu-item px-4">
										<a href="recu.php">Reçu</a>
									</li>
								</ul>
							</li>
							<li class="drawer-menu-item">
								<a href="rapport.php">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Rapport Global</span>
								</a>
							</li>
							<li class="drawer-menu-item ">
								<a href="registre.php">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Registres</span>
								</a>
							</li>
						</ul>
					</li>
				</div>
			</nav>
		</div>
	</div>
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

<script>
$(function() {
window.morrisDashboardChart = new Morris.Area({
element: 'morris-area-chart',
data: [{
year: '2017-01',
a: 6352.27
},
{
year: '2017-02',
a: 4309.98
},
{
year: '2017-03',
a: 1465.98
},
{
year: '2017-04',
a: 1298.25
},
{
year: '2017-05',
a: 3209
},
{
year: '2017-06',
a: 2083
},
{
year: '2017-07',
a: 1285.23
},
{
year: '2017-08',
a: 1289
},
{
year: '2017-09',
a: 4430
},
{
year: '2017-10',
a: 8921.19
}
],
xkey: 'year',
ykeys: ['a'],
labels: ['Earnings'],
lineColors: ['#fff'],
fillOpacity: '0.2',
gridEnabled: true,
gridTextColor: '#ffffff',
resize: true
});

});
</script>


</body>

</html>