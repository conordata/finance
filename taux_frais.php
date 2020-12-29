<!DOCTYPE html>
<html lang="en" dir="ltr">

<?php 
	session_start();
	
	require "database_exec/database.php";
	require "database_exec/recu.php";

	//taux
	$taux_du_jour=Taux_Frais::get_taux();
	$classe=Fregister::get_all_classe();
	$frais=Recu::get_fees();
	$option=Taux_Frais::get_section();

	$mois_annee=array('Septembre','Octobre','Novembre','Decembre','Janvier','Fevrier','Mars','Avril','Mai','Juin');
	$frais_pour_tous=array('m1','m2','m3','m4','m5','m6','m7','m8','m9','m10');
		
?>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>GFI - Pro | Taux & Frais</title>


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
              <div class="page-title m-0">Taux et Frais</div>

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
      			<div class="card card-body card-padded">
							<h1 class="h4 mb-0">1. Taux d'échange</h1>
							<hr>
							<div class="row mb-3 text-primary">
								<div class="col-sm-6">
									<h3>Taux actuel:</h3>
								</div>
								<div class="col-sm-6">
									<h3 class="float-right"><?php echo(number_format($taux_du_jour,2)); ?> CDF</h3>
								</div>
							</div>						
							<form action="database_exec/taux_frais2.php" method="POST" class="mb-1">
								<div class="row mb-3">
									<div class="col-sm-4">
										<div class="form-group">
											<input type="number" id="taux" class="datepicker-disabled form-control" name="taux_dollar" placeholder="Entrer nouveau taux" required >
										</div>
									</div>
									<div class="col-sm-4">
										<div class="form-group">
											<input class="btn btn-primary" type="submit" name="taux" value="Changer">
										</div>
									</div>
								</div>
							</form>
							<form method="POST">
								<button class="btn btn-muted" type="submit" name="story"><i class="material-icons align-middle text-muted md-18">access_time</i> Historique</button>
							</form>
						</div>
						<div class="card card-body card-padded">
							<h1 class="h4 mb-0">2. Frais / Classe</h1>
							<hr>

					<?php

						if (isset($_POST['edit_fee'])) {
							$data_classe=$_POST['data_classe'];
							$data_classe=Recu::get_classe_by_ref($data_classe);
							$classe_ref=$_POST['data_classe'];
					?>

							<div class="row mb-3 ml-1">
								<h4>Classe: <?php echo ($classe_ref); ?></h4>			
							</div>	
							<form action="#" method="POST" class="mb-1">
								<input type="text" class="datepicker-disabled form-control" name="n_data_classe" <?php echo ('value="'.$classe_ref.'"'); ?> hidden>
								<div class="row mb-3">
									<div class="col-3 mb-3">
										<div class="form-group">
											<label>Inscription</label>
											<input type="number" class="datepicker-disabled form-control" name="n_inscription" <?=('value="'.$data_classe[0]['inscription'].'"'); ?>>
										</div>
									</div>
								<?php foreach ($mois_annee as $key => $value):?>
									<div class="col-3 mb-3">
										<div class="form-group">
											<label><?=$value; ?></label>
											<input type="number" class="datepicker-disabled form-control" <?php echo ('name="'.$frais_pour_tous[$key].'" value="'.$data_classe[0][$frais_pour_tous[$key]].'"'); ?>>
										</div>
									</div>

							<?php endforeach;
								
								foreach ($frais as $key => $value):?>
	
									<div class="col-3 mb-3">
										<div class="form-group">
											<label><?=(ucfirst($value['title']));?></label>
											<input type="number" class="datepicker-disabled form-control" <?=('value="'.$data_classe[0][$value['reference']].'"'); echo ('name="fee'.$key.'"'); ?>>
										</div>
									</div>
							<?php	endforeach; ?>

									<div class="col">
										<div class="form-group">
											<label class="text-white">_</label><br>
											<input class="btn btn-primary" type="submit" name="n_frais" value="Changer">
										</div>
									</div>
								</div>
							</form>
					<?php
						}
					?>
							
							<div class="table-responsive">
								<table class="table table-bordered">
									<thead>
										<tr>
											<th scope="col" class="text-center">#</th>
											<th scope="col" class="text-center">Classe</th>
											<th scope="col" class="text-center">Inscription</th>
										<?php foreach ($mois_annee as $key => $value): ?>
											<th scope="col" class="text-center"><?=$value; ?></th>
											
										<?php endforeach;

										foreach ($frais as $key => $value): ?>
											<th scope="col" class="text-center"><?=$value['title']; ?></th>
										<?php	endforeach; ?>

											<th></th>
										</tr>
									</thead>
									<tbody>

									<?php

										$i=0;
										while ($i<count($classe)) { ?>
											
										<tr>
											<th class="align-middle text-center" scope="row"><?=$i+1; ?></th>											
											<td class="align-middle text-center"><?=$classe[$i]['reference']; ?></td>
											<td class="align-middle text-center"><?=number_format($classe[$i]['inscription'],2); ?> CDF</td>
										<?php foreach ($frais_pour_tous as $key => $value):?>
																						
											<td class="align-middle text-center"><?=(number_format($classe[$i][$value],2)); ?> CDF</td>

										<?php endforeach;

											foreach ($frais as $key => $value):?> 
											
												<td class="align-middle text-center"><?php echo (number_format($classe[$i][$value['reference']],2)); ?> CDF</td>
												
										<?php endforeach; ?>

											<td class="align-middle" style="width:40px">
												<form method="POST" action="#">
													<input type="text" name="data_classe" <?php echo ('value="'.$classe[$i]['reference'].'"'); ?> hidden>
													<button type="submit" name="edit_fee" class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit"><i class="material-icons md-14 align-middle">edit</i></button>
												</form>		
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

						<div class="card card-body card-padded">
							<h1 class="h4 mb-0">3. Liste des frais</h1>
							<hr>		
							<form action="database_exec/taux_frais2.php" method="POST" class="mb-1">
								<div class="row mb-3">
									<div class="col-sm-4">
										<div class="form-group">											
											<input type="text" id="frais" class="datepicker-disabled form-control" name="n_frais" placeholder="Entrer nouveau frais" required>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="form-group">
											<input class="btn btn-primary" type="submit" name="new_fee" value="Créer" required>
										</div>
									</div>
								</div>
							</form>
							<table class="table mb-2">
								<thead>
									<tr>
										<th style="width: 60px;">#</th>
										<th>Frais</th>
										<th class="text-right">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="align-middle">1</td>
										<td class="align-middle">Inscription</td>
										<td class="align-middle text-right">
											<form method="POST" action="database_exec/taux_frais2.php">
												<button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit" disabled>
												<i class="material-icons md-14 align-middle">edit</i>
												</button>
												<button class="btn btn-danger btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Delete" disabled>
												<i class="material-icons md-14 align-middle">delete</i>
												</button>
											</form>	
										</td>
									</tr>
									<tr>
										<td class="align-middle">2</td>
										<td class="align-middle">Minerval</td>
										<td class="align-middle text-right">
											<form method="POST" action="">
												<button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit" disabled>
												<i class="material-icons md-14 align-middle">edit</i>
												</button>
												<button class="btn btn-danger btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Delete" disabled>
												<i class="material-icons md-14 align-middle">delete</i>
												</button>
											</form>	
										</td>
									</tr>
							<?php
								$i=3;

								foreach ($frais as $key) { ?>

									<tr>
										<td class="align-middle"><?php echo ($i); ?></td>
										<td class="align-middle"><?php echo (ucfirst($key['title'])); ?></td>
										<td class="align-middle text-right">
											<form method="POST" action="">
												<button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit">
												<i class="material-icons md-14 align-middle">edit</i>
												</button>
												<button class="btn btn-danger btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Delete">
												<i class="material-icons md-14 align-middle">delete</i>
												</button>
											</form>	
										</td>
									</tr>
							<?php 
									$i++;
								}								
							?>
								</tbody>
							</table>
						</div>
						<div class="card card-body card-padded">
							<h1 class="h4 mb-0">4. Liste d'options</h1>
							<hr>		
							<form action="database_exec/taux_frais2.php" method="POST" class="mb-1">
								<div class="row mb-3">
									<div class="col-sm-4">
										<div class="form-group">											
											<input type="text" id="section" class="datepicker-disabled form-control" name="section" placeholder="Entrer nouvelle option" required >
										</div>
									</div>
									<div class="col-sm-4">
										<div class="form-group">											
											<input type="text" id="ref" class="datepicker-disabled form-control" name="ref_section" placeholder="Référence" required >
										</div>
									</div>
									<div class="col-sm-4">
										<div class="form-group">
											<input class="btn btn-primary" type="submit" name="n_option" value="Créer" required>
										</div>
									</div>
								</div>
							</form>
							<table class="table mb-2">
								<thead>
									<tr>
										<th style="width: 60px;">#</th>
										<th>Option</th>
										<th>Référence</th>
										<th class="text-right">Action</th>
									</tr>
								</thead>
								<tbody>
							<?php
								$i=1;

								foreach ($option as $key) { ?>
									
									<tr>
										<td class="align-middle"><?php echo ($i); ?></td>
										<td class="align-middle"><?php echo ucfirst($key['nom_section']); ?></td>
										<td class="align-middle"><?php echo (strtoupper($key['reference'])); ?></td>
										<td class="align-middle text-right">
											<button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit">
											<i class="material-icons md-14 align-middle">edit</i>
											</button>
											<button class="btn btn-danger btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Delete">
											<i class="material-icons md-14 align-middle">delete</i>
											</button>
										</td>
									</tr>
							<?php
									$i++;
								}
							?>
								</tbody>
							</table>
						</div>
						<div class="card card-body card-padded">
							<h1 class="h4 mb-0">5. Liste de classes</h1>
							<hr>
							<form action="database_exec/taux_frais2.php" method="POST" class="mb-3 mt-2">
								<div class="row mb-0">
									<div class="col-sm-4 mt-2">
										<div class="form-group">
											<label for="classe">Nouvelle classe</label>
											<select required id="classe" class="select-2" name="classe">
												<option value="" selected disabled>Selectionner la classe</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
											</select>
										</div>
									</div>
									<div class="col-sm-3 mt-2">
										<div class="form-group">
											<select id="option" class="select-2" name="option"  required>
												<option value="" selected disabled>Selectionner l'option</option>

										<?php
											foreach ($option as $key) { ?>
												<option <?php echo ('value="'.$key['reference'].'"'); ?>><?php echo (ucfirst($key['nom_section'])); ?> </option>
										<?php
											}
										?>
											</select>
										</div>
									</div>
									<div class="col-sm-3 mt-2">
										<div class="form-group">
											<select id="s_classe" class="select-2" name="s_classe">
												<option value="-" selected>Selectionner sous classe</option>
												<option value="A">A</option>
												<option value="B">B</option>
												<option value="C">C</option>
												<option value="D">D</option>
												<option value="E">E</option>
												<option value="F">F</option>
											</select>
										</div>
									</div>
									<div class="col-sm-2">
										<div class="form-group">
											<input class="btn btn-primary" type="submit" name="n_classe" value="Créer" required>
										</div>
									</div>
								</div>	
							</form>
							<table class="table mb-2">
								<thead>
									<tr>
										<th style="width: 60px;">#</th>
										<th>Classe</th>
										<th>Option</th>
										<th>Sous classe</th>
										<th>Référence</th>
										<th class="text-right">Action</th>
									</tr>
								</thead>
								<tbody>
							<?php
								$i=1;

								foreach ($classe as $key) { ?>
									
									<tr>
										<td class="align-middle"><?=($i); ?></td>
										<td class="align-middle"><?=($key['classe']); ?></td>
										<td class="align-middle"><?=(strtoupper($key['section'])); ?></td>
										<td class="align-middle"><?=($key['sous_classe']); ?></td>
										<td class="align-middle"><?=($key['reference']); ?></td>
										<td class="align-middle text-right">
											<button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit">
											<i class="material-icons md-14 align-middle">edit</i>
											</button>
											<button class="btn btn-danger btn-sm " data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Delete">
											<i class="material-icons md-14 align-middle">delete</i>
											</button>
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
					<li class="drawer-menu-item active">
						<a href="taux_frais.php">
							<i class="material-icons">account_balance</i>
							<span class="drawer-menu-text"> Taux & Frais</span>
						</a>
					</li>
					<li class="drawer-menu-item">
						<a href="#">
							<i class="material-icons">event_available</i>
							<span class="drawer-menu-text"> Calendrier</span>
						</a>
					</li>
					<li class="drawer-menu-item">
						<a href="#">
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
							<li class="drawer-menu-item">
								<a href="bon_entree.php">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Bon d'entrée</span>
								</a>
							</li>
							<li class="drawer-menu-item ">
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
							<li class="drawer-menu-item">
								<a href="book.php">
									<i class="material-icons px-3">receipt</i>
									<span class="drawer-menu-text px-3"> Carnet de Reçu</span>
								</a>
							</li>
							<li class="drawer-menu-item ">
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

<?php


	if (isset($_POST['n_frais'])) {

		$n_fee='fee0';

		$rqst='UPDATE class SET inscription="'.$_POST['n_inscription'].'"';

		foreach ($frais as $key => $value) {
			$rqst=$rqst.', '.$value['reference'].'="'.$_POST[$n_fee].'"';
			$n_fee++;
		}
						
		foreach ($frais_pour_tous as $key => $value) {
			$rqst=$rqst.', '.$value.'="'.$_POST[$value].'"';
		}
		
		$classe_ref=$_POST['n_data_classe'];
		$rqst=$rqst.' WHERE reference="'.$classe_ref.'"';
		// echo $rqst;

		Taux_Frais::insert_data($rqst);

		echo "<meta http-equiv='refresh' content='0'>";
	}
?>

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