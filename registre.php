<!DOCTYPE html>
<html lang="en" dir="ltr">

<?php
	
	// include_once 'database_exec/fregister.php';
	require "database_exec/recu.php";

  $classes=Fregister::get_all_classe();
  $fees=Recu::get_fees();

  $mois_annee=array('Septembre','Octobre','Novembre','Decembre','Janvier','Fevrier','Mars','Avril','Mai','Juin');
	$frais_pour_tous=array('m1','m2','m3','m4','m5','m6','m7','m8','m9','m10');

?>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>GFI - Pro | Registre</title>


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
              <div class="page-title m-0">Registre de paiement</div>

              <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav ml-auto align-items-center">
                	<li class="nav-item nav-link">
										<a class="btn btn-white" href="home.php">
											<i class="material-icons align-middle md-18">chevron_left</i>Accueil</a>
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
						<div class="card">
							<div class="card-header">
								<div class="row align-items-center">
									<div class="col-md-4">
										<h5 class="m-0">LISTE DES CLASSES</h5>
									</div>
								</div>
							</div>
							<div class="row font-1">
								<div class="col-lg-12">
									<div class="card card-body flex-row align-items-center">
										<h4 class="m-0">Total élève</h4>
										<div class="badge badge-primary ml-auto"><h4 class="mt-1 mb-0"><?=sprintf("%04d", number_format(Fregister::count_all_eleve())); ?></h4></div>
									</div>
								</div>
							</div>
							
							<div class="table-responsive">
								<table id="data-table" class="table table-striped table-bordered" style="width:100%">
									<thead>
										<tr>
										 	<th class="text-center align-middle" style="width: 50px">#</th>
											<th class="text-center align-middle">Classe</th>
											<th class="text-center align-middle">Nombre</th>
											<th class="text-center align-middle">Inscription</th>

											<?php foreach ($mois_annee as $key => $value): ?>
											<th scope="col" class="text-center align-middle"><?=$value; ?></th>
											<?php endforeach; 
											
											foreach ($fees as $k => $fee):?>
											<th class="text-center align-middle"><?=$fee['title']; ?></th>
											<?php endforeach;?>
											<th style="width: 120px"></th>
										</tr>
									</thead>
								  <tbody>
									<?php foreach ($classes as $k => $class):?>
										<tr>
											<th class="text-center align-middle"><?=$k+1;?></th>
											<td class="align-middle"><?=$class['reference'];?></td>
											<td class="align-middle"><?=Fregister::count_eleve($class['reference']);?></td>
											<td class="align-middle"><?=number_format($class['inscription'],2);?> CDF</td>

											<?php foreach ($frais_pour_tous as $key => $value):?>
																						
											<td class="align-middle text-center"><?=(number_format($class[$value],2)); ?> CDF</td>

											<?php endforeach;

											 foreach ($fees as $k => $fee):?>
											<td class="align-middle"><?=number_format($class[$fee['reference']],2);?> CDF</td>
											<?php endforeach;?>
											
											<td class="align-middle">
												<a href="info_classe.php?id_cls=<?=$class['reference'];?>">
													<i class="material-icons md-18 align-middle">visibility</i>
													<span class="align-middle">Voir plus</span>
												</a>
											</td>
										</tr>
									<?php endforeach;?>
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
						<a href="index.html">
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
					<li class="drawer-menu-item  ">
						<a href="events-calendar.html">
							<i class="material-icons">event_available</i>
							<span class="drawer-menu-text"> Calendrier</span>
						</a>
					</li>
					<li class="drawer-menu-item  ">
						<a href="ui-notifications.html">
							<i class="material-icons">notifications</i>
							<span class="drawer-menu-text"> Notifications</span>
						</a>
					</li>
					<li class="drawer-menu-item  ">
						<a href="maps.html">
							<i class="material-icons">pin_drop</i>
							<span class="drawer-menu-text"> Localisation</span>
						</a>
					</li>
					<li class="drawer-menu-item  ">
						<a href="#">
							<i class="material-icons">receipt</i>
							<span class="drawer-menu-text"> Tâches</span>
						</a>
						<div>
							<li class="drawer-menu-item ">
								<a href="ui-buttons.html">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Bon d'entrée</span>
								</a>
							</li>
							<li class="drawer-menu-item ">
								<a href="ui-buttons.html">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Bon de Sortie</span>
								</a>
							</li>
							<li class="drawer-menu-item ">
								<a href="ui-buttons.html">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Bulletin de Paie</span>
								</a>
							</li>
							<li class="drawer-menu-item">
								<a href="book.php">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Carnet de Reçu</span>
								</a>
							</li>
							<li class="drawer-menu-item">
								<a href="rapport.php">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Rapport Global</span>
								</a>
							</li>
							<li class="drawer-menu-item active">
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
<div class="mdk-drawer js-mdk-drawer" id="user-drawer" data-position="right" data-align="end">
	<div class="mdk-drawer__content">
		<div class="mdk-drawer__inner" data-simplebar data-simplebar-force-enabled="true">
			<nav class="drawer drawer--light">
				<div class="drawer-spacer drawer-spacer-border">
					<div class="media align-items-center">
						<img src="../../../pbs.twimg.com/profile_images/928893978266697728/3enwe0fO_400x400.jpg" class="img-fluid rounded-circle mr-2" width="35" alt="">
						<div class="media-body">
							<a href="#" class="h5 m-0">Frontted</a>
							<div>Gestion du compte</div>
						</div>
					</div>
				</div>

				<!-- MENU -->
				<ul class="drawer-menu" id="userMenu" data-children=".drawer-submenu">
					<li class="drawer-menu-item">
						<a href="account.html">
							<i class="material-icons">lock</i>
							<span class="drawer-menu-text"> Compte</span>
						</a>
					</li>
					<li class="drawer-menu-item">
						<a href="login.html">
							<i class="material-icons">exit_to_app</i>
							<span class="drawer-menu-text"> Déconnexion</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>
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