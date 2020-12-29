<!DOCTYPE html>
<html lang="en" dir="ltr">

<?php 
	session_start();
	
	require "database_exec/database.php";
	require "database_exec/recu.php";
	

	//Numero recu
	$recu=Recu::get_recu();
	$recu=1+$recu[0]['MAX(numero_recu)'];

	//taux
	$taux_du_jour=Taux_Frais::get_taux();

	$frais_pour_tous=array('m1','m2','m3','m4','m5','m6','m7','m8','m9','m10');
?>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>GFI - Pro | Recu</title>


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
              <div class="page-title m-0">Reçu</div>

              <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav ml-auto align-items-center">
                  <li class="nav-item nav-link">
                    <div class="form-group m-0">
                      <form method="POST" action="#" class="input-group input-group--inline">
                        <input type="text" class="form-control" name="search" placeholder="Entrer ID" <?php if (isset($_SESSION['student'])) echo 'value='.$_SESSION['student'][0]['id_eleve']; ?>>
                        <button style="background:none; border:none; color:white;" type="submit" class="ml-2 mt-1" name="id_search"><i class="material-icons">search</i></button>
                        <button class="btn btn-outline-danger" type="clear" name="clear" <?php if (!isset($_SESSION['student'])) echo "hidden"; ?>>Clear</button>
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
							<div class="col-md-8">
								<h1 class="h2 mb-0">Nouveau reçu</h1>
								<ol class="breadcrumb">
									<li><a href="#">Accueil</a></li>
									<li><a href="#">Carnet de Reçu</a></li>
									<li><a href="#">Reçu</a></li>
								</ol>
							</div>
							<div class="col-md-4 text-md-right">
								<a href="book.php" class="btn btn-white">
									<i class="material-icons md-18 align-middle">chevron_left</i>
									<span class="align-middle">Retour</span>
								</a>
							</div>
						</div>
 
      			<div class="mt-0 pb-0">
							<div class="card card-body p-2">
								<div class="row row-projects">
									<div class="col">
										<i class="material-icons text-link-color md-36">receipt</i>
										<div class="mb-1">Numéro reçu</div>
										<h5 class="mb-0 "><?php echo (sprintf("%04d", $recu)); ?></h5>
									</div>
									<div class="col">
										<i class="material-icons text-success md-36">attach_money</i>
										<div class="mb-1">Taux</div>
										<h5 class="mb-0"><?php echo(number_format($taux_du_jour,2)); ?></h5>
									</div>
									<div class="col">
										<i class="material-icons text-warning md-36">contacts</i>
										<div class="mb-1">ID Elève</div>
										<h5 class="mb-0">
											<?php 
												if (isset($_SESSION['student'])) echo (ucfirst($_SESSION['student'][0]['id_eleve']));
												else echo "-";
											?>	
										</h5>
									</div>
									<div class="col">
										<i class="material-icons text-primary md-36">school</i>
										<div class="mb-1">Classe</div>
										<h5 class="mb-0">
											<?php 
												if (isset($_SESSION['student'])) echo (ucfirst($_SESSION['student'][0]['classe']));
												else echo "-";
											?>
										</h5>
									</div>
									<div class="col">
										<i class="material-icons text-muted md-36">event_available</i>
										<div class="mb-1">Date</div>
										<h5 class="mb-0"><?php  echo (date("Y-m-d", time()));?></h5>
									</div>
								</div>
							</div>														
						</div>
						<div class="card card-body card-padded">
							<h1 class="h4 mb-0">1. Identité</h1>
							<hr>
							<form action="database_exec/recu2.php" method="POST" class="mb-3">
								<div class="row mb-3">
									<div class="col-sm-4">
										<div class="form-group">
											<label for="classe">Classe</label>
											<select required id="classe" class="select-2" name="classe">
											<?php if (isset($_SESSION['student'])) echo '
												<option value="'.$_SESSION['student'][0]['classe'].'" selected>'.$_SESSION['student'][0]['classe'].'</option>';
												else echo '
												<option value="" selected disabled>Selectionner la classe</option>';
											;?>												
										<?php
											foreach (Fregister::get_all_classe() as $key) { ?>
												<option <?php echo ('value="'.$key['reference'].'"'); ?>><?php echo (ucfirst($key['reference'])); ?> </option>
										<?php
											}
										?>
											</select>
										</div>
									</div>
									
								</div>
								<div class="row mb-3">
									<div class="col-sm-4">
										<div class="form-group">
											<label for="name">Nom</label>
											<input type="text" required id="nom" class="datepicker-disabled form-control" name="nom" <?php if (isset($_SESSION['student'])) echo 'value="'.ucfirst($_SESSION['student'][0]['nom']).'"';?>>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="form-group">
											<label for="post-nom">Post-nom</label>
											<input type="text" required id="post-nom" class="datepicker-disabled form-control" name="post_nom" <?php if (isset($_SESSION['student'])) echo 'value="'.ucfirst($_SESSION['student'][0]['post_nom']).'"';?>>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="form-group">
											<label for="prenom">Prénom</label>
											<input type="text" required id="prenom" class="datepicker-new-order form-control" name="prenom" <?php if (isset($_SESSION['student'])) echo 'value="'.ucfirst($_SESSION['student'][0]['prenom']).'"';?>>
										</div>
									</div>
								</div>
								
								<h1 class="h4 mb-0">2. Finance</h1>
								<hr>
								<div class="row mb-3">
									<div class="col-sm-4">
										<div class="form-group">
											<label for="supplier">Devise</label>
											<select class="select-2" name="devise" required="required">
												<option value="" disabled selected>Selectionner la device</option>
												<option value=CDF>Franc Congolais (CDF)</option>
												<option value="USD">Unit State Dollar (USD)</option>
											</select>
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-sm-4">
										<div class="form-group">
											<label for="order_created">Montant</label>
											<input type="number" id="order_created" class="datepicker-disabled form-control" name="montant" required>
										</div>
									</div>
									<div class="col-sm-4 mt-4">
										<div class="form-group">
											<label for="supplier">Motif</label>
											<select class="select-2" name="motif" required>
												<option value="" disabled <?php if (isset($_SESSION['student'])) echo 'selected';?>>Selectionner motif de paiement</option>
												<option value="inscription" <?php if (isset($_SESSION['student'])) echo 'disabled'; else echo "selected";?>>Inscription</option>
												<option value="minerval" <?php if (!isset($_SESSION['student'])) echo 'disabled'; else echo "selected";?>>Minerval</option>
										<?php
												//motif
												if (isset($_SESSION['student'])) {
													$fees=Recu::get_fees();

													foreach ($fees as $key) { ?>

														<option <?php echo 'value="'.$key['reference'].'"'; ?>><?php echo (ucfirst($key['title'])); ?></option>
										<?php	}
														
												}
										?>

											</select>
										</div>
									</div>
								</div>
								<input type="text" name="id_classe" <?='value="'.$recu.'"'; ?> hidden>
								<button class="btn btn-primary" type="submit" name="receipt">Valider</button>
							</form>
						</div>

						<?php 

							if (isset($_SESSION['student'])) {

								//fees
								$info=$_SESSION['student'];
								$paid=$info[0]['minerval'];
								$to_pay=Recu::get_classe_by_ref($info[0]['classe']);
								// $fee=$to_pay[0]['inscription'];

								$month=array('Septembre', 'Octobre', 'Novembre', 'Decembre', 'Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin');

								$i=0;
								$solde=0;
						?>

						<div class="card card-body card-padded">
							<h1 class="h4 mb-4">3. Fiche Individuelle</h1>
							<div class="table-responsive">
								<table class="table mb-3">
									<thead>
										<tr>
											<th style="width: 60px;">#</th>
											<th>Motif</th>
											<th>A Payer</th>
											<th>Payé</th>
											<th>Litige</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="align-middle text-left">1</td>
											<td>Inscription</td>
											<td><?php echo (number_format($to_pay[0]['inscription'],2)); ?> CDF</td>
											<?php 
												if ($paid==0) { 
													echo "<td>-</td>";
													echo "<td>-</td>";
													echo "<td>-</td>";
												}
												elseif (($paid-$to_pay[0]['inscription'])>=0) {
													echo "<td>".(number_format($to_pay[0]['inscription'],2))." CDF</td>";
													echo "<td>-</td>";
													echo "<td>
																	<div class='badge badge-success'>
																		En Ordre
																	</div>
																</td>";
													$paid=$paid-$to_pay[0]['inscription'];
												}
												else {
													echo "<td>".(number_format($paid,2))." CDF</td>";
													echo "<td class='align-middle'>".(number_format(($to_pay[0]['inscription']-$paid),2))." CDF</td>";
													echo "<td>
																	<div class='align-middle badge badge-warning'>
																		A Compléter
																	</div>
																</td>";
													$paid=0;
												}
											?>
										</tr>
								<?php foreach ($frais_pour_tous as $key => $value): ?>
										<tr>
											<th class="align-middle text-left"><?=($key+2); ?></th>
											<td class="align-middle"><?=($month[$key]); ?></td>
											<td class="align-middle"><?=(number_format($to_pay[0][$value],2)); ?> CDF</td>
											<?php 
												if ($paid==0) { 
													echo "<td>-</td>";
													echo "<td>-</td>";
													echo "<td>-</td>";
												}
												elseif (($paid-$to_pay[0][$value])>=0) {
													echo "<td>".(number_format($to_pay[0][$value],2))." CDF</td>";
													echo "<td>-</td>";
													echo "<td>
																	<div class='badge badge-success'>
																		En Ordre
																	</div>
																</td>";
													$paid=$paid-$to_pay[0][$value];
												}
												else {
													echo "<td>".(number_format($paid,2))." CDF</td>";
													echo "<td class='align-middle'>".(number_format(($to_pay[0][$value]-$paid),2))." CDF</td>";
													echo "<td>
																	<div class='align-middle badge badge-warning'>
																		A Compléter
																	</div>
																</td>";
													$paid=0;
												}
										echo "</tr>";
									endforeach;

										$j=0;
										while ($j<count($fees)) { ?>
											<tr>
												<th class="align-middle text-left"><?=($i+2); ?></th>
												<td class="align-middle"><?=(ucfirst($fees[$j]['title'])); ?></td>
												<td class="align-middle">
													<?php
														$fee=$to_pay[0][$fees[$j]['reference']];
														echo (number_format($fee,2)); 
													?> CDF	
												</td>
		
									<?php 
												$paid=$info[0][$fees[$j]['reference']];

												if ($paid==0) { 
													echo "<td>-</td>";
													echo "<td>-</td>";
													echo "<td>-</td>";
												}
												elseif (($paid-$fee)>=0) {
													echo "<td>".(number_format($fee,2))." CDF</td>";
													echo "<td>-</td>";
													echo "<td>
																	<div class='badge badge-success'>
																		En Ordre
																	</div>
																</td>";
													$paid=$paid-$fee;
												}
												else {
													echo "<td>".(number_format($paid,2))." CDF</td>";
													echo "<td class='align-middle'>".(number_format(($fee-$paid),2))." CDF</td>";
													echo "<td>
																	<div class='align-middle badge badge-warning'>
																		A Compléter
																	</div>
																</td>";
													$paid=0;
												}
										echo "</tr>";
											$j++;
										}
									?>
									</tbody>
									<thead>
										<tr>
											<th><?php //echo ($i+3); ?>#</th>
											<th>PH</th>
											<th>Savon</th>
											<th>Duplicataire</th>
											<th>Bristol</th>
											<th>Collant</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th class="align-middle">Fourn.</th>
											<td class="align-middle">-</td>
											<td class="align-middle">-</td>
											<td class="align-middle">-</td>
											<td class="align-middle">-</td>
											<td class="align-middle">-</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="card card-body card-padded">
							<h1 class="h4 mb-4">4. Sommaire</h1>
							<div class="table-responsive">
								<table class="table mb-3">
									<thead>
										<tr>
											<th scope="col" class="text-center">#</th>
											<th scope="col">Motif</th>
											<th scope="col">Total à Payer</th>
											<th scope="col">Total Versé</th>
											<th scope="col">Total Litige</th>
											<th scope="col">A rendre</th>
											<th scope="col" style="width: 200px">Evolution</th>
										</tr>
									</thead>
									<tbody>
								<?php
									$motif=array('inscription', 'minerval');
									$i=0;
									$to_pay_temp=0;

									while ($i<count($motif)) { ?>
																					
										<tr>
											<th class="align-middle text-center" scope="row"><?php echo ($i+1); ?></th>
											<td class="align-middle"><?php echo (ucfirst($motif[$i])); ?></td>
											<td class="align-middle" scope="row">
												<?php 
													if ($motif[$i]=='inscription') {
														$to_pay_temp=$to_pay[0][$motif[$i]];
													}
													else {
														$to_pay_temp=0;
														foreach ($frais_pour_tous as $key => $value) {
															$to_pay_temp+=$to_pay[0][$value];
														}

													echo (number_format($to_pay_temp,2)); 
												}
												?> CDF
											</td>
											<td class="align-middle" scope="row">
												<?php
													if ($motif[$i]=='inscription') {
														if ($info[0]['minerval']>=$to_pay[0][$motif[$i]]) {
															$paid=$to_pay[0][$motif[$i]];
															$rest=$info[0]['minerval']-$to_pay[0][$motif[$i]];
														}
														else {
															$paid=$info[0]['minerval'];
															$rest=0;
														}
													}

													else $paid=$rest;
													echo (number_format($paid,2));
												?> CDF
											</td>
											
											<?php 
												$litige=$to_pay_temp-$paid;
												if ($litige>1) {
													echo '<td class="align-middle">'.number_format($litige,2).' CDF</td>';
													echo '<td class="align-middle">-</td>';
												}
												else {
													echo '<td class="align-middle">-</td>';
													echo '<td class="align-middle">'.number_format($litige,2).' CDF</td>';
												}

											?>

											<td class="align-middle text-center">
												<?php
												if ($to_pay_temp==0) {
														$to_pay_temp=1;
													}

													$evol=($paid/($to_pay_temp)*100);

													if (round($evol)>100) {
														$class="progress-bar bg-primary";
													}
													elseif (round($evol)>75) {
														$class="progress-bar bg-success";
													}
													elseif (round($evol)>30) {
														$class="progress-bar bg-warning";
													}
													else $class="progress-bar bg-danger";
												?>

												<div class="progress" style="height: 12px;">
													<div <?php echo ("class='".$class."'"); ?> role="progressbar" style="width: <?php echo ($evol); ?>%;" <?php echo ('aria-valuenow="'.$evol.'"'); ?> aria-valuemin="0" aria-valuemax="100"><?php echo (round($evol)); ?>%</div>
												</div>
											</td>
										</tr>
								<?php 
										$i++;
									} 

									$i=0;
									while ($i<count($fees)) { ?>
																					
										<tr>
											<th class="align-middle text-center" scope="row"><?php echo ($i+3); ?></th>
											<td class="align-middle"><?php echo (ucfirst($fees[$i]['title'])); ?></td>
											<td class="align-middle"><?php echo (number_format($to_pay[0][$fees[$i]['reference']],2)); ?> CDF</td>
											<td class="align-middle"><?php echo (number_format($info[0][$fees[$i]['reference']],2)); ?> CDF</td>
											
											<?php 
												$litige=$to_pay[0][$fees[$i]['reference']]-$info[0][$fees[$i]['reference']];
												if ($litige>1) {
													echo '<td class="align-middle">'.number_format($litige,2).' CDF</td>';
													echo '<td class="align-middle">-</td>';
												}
												else {
													echo '<td class="align-middle">-</td>';
													echo '<td class="align-middle">'.number_format($litige,2).' CDF</td>';
												}

											?>

											<td class="align-middle text-center">
												<?php
													if ($to_pay[0][$fees[$i]['reference']]==0) {
														$to_pay[0][$fees[$i]['reference']]=1;
													}

													$evol=(($info[0][$fees[$i]['reference']])/($to_pay[0][$fees[$i]['reference']])*100);

													if (round($evol)>100) {
														$class="progress-bar bg-primary";
													}
													elseif (round($evol)>75) {
														$class="progress-bar bg-success";
													}
													elseif (round($evol)>30) {
														$class="progress-bar bg-warning";
													}
													else $class="progress-bar bg-danger";
												?>

												<div class="progress" style="height: 12px;">
													<div <?php echo ("class='".$class."'"); ?> role="progressbar" style="width: <?php echo ($evol); ?>%;" <?php echo ('aria-valuenow="'.$evol.'"'); ?> aria-valuemin="0" aria-valuemax="100"><?php echo (round($evol)); ?>%</div>
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

					<?php } ?>
						
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
					<li class="drawer-menu-item  ">
						<a href="events-calendar.html">
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
							<li class="drawer-menu-item">
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

	//fiche individuelle
	if (isset($_POST["id_search"])) {

		$id_number=$_POST['search'];
		$info_student=Recu::get_info_student($id_number);

		if (count($info_student)!=0) {
			$_SESSION['student']=$info_student;
		}

		else echo "<script>
	              alert('Vous avez entré un Identifiant inéxistant');
	            </script>";

		echo "<meta http-equiv='refresh' content='0'>";
	}

	if (isset($_POST['clear'])) {
		unset($_SESSION['student']);

		echo "<meta http-equiv='refresh' content='0'>";
	}



?>

	<script>
		if ( window.history.replaceState ) {
			window.history.replaceState( null, null, window.location.href );
		}
	</script>



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