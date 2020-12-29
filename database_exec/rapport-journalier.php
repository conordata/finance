<?php

	$date=date("Y-m-d", time());

	$activities=Book::get_all_book_day($date);

	$cdf0=0;
	$usd0=0;

	foreach ($activities as $montant) {
		if ($montant['devise']=='CDF') {
			$cdf0=$cdf0+$montant['montant'];
		}

		else $usd0=$usd0+$montant['montant'];
	}
	
?>

<div class="card card-body card-padded">
	<div class="card card-body flex-row align-items-center">
		<h1 class="h4 mb-0">Rapport Journalier</h1>
		<div class="ml-auto"><h4 class="mt-1 mb-0"><?=$date ?></h4></div>
	</div>
	<hr>

	<div class="row font-1">
		<div class="col-lg-12">
			<div class="card card-body flex-row align-items-center">
				<h4 class="m-0">Total payment</h4>
				<div class="badge badge-primary ml-auto"><h4 class="mt-1 mb-0"><?=number_format($cdf0,2); ?> CDF | <?=number_format($usd0,2); ?> USD</h4></div>
			</div>
		</div>
	</div>
	<hr>

<?php
	include_once 'database_exec/carnetBon.php';
  $bons = carnetBon::get_all_bon('entree');

  $bons_entree=array();
	foreach ($bons as $value) {
		$date_heure=explode(' ', $value['date_heure']);
		if ($date_heure[0]==$date) {
			$bons_entree[]=$value;
		}
	}

	$cdf=0;
	$usd=0;

	foreach ($bons_entree as $montant) {
		if ($montant['sign_ac']=='CDF') {
			$cdf=$cdf+$montant['montant'];
		}

		else $usd=$usd+$montant['montant'];
	}

	$cdf1=$cdf;
	$usd1=$usd;
?>






	<div class="row font-1">
		<div class="col-lg-12">
			<div class="card card-body flex-row align-items-center">
				<h4 class="m-0">Total entrée</h4>
				<div class="badge badge-primary ml-auto"><h4 class="mt-1 mb-0"><?=number_format($cdf,2); ?> CDF | <?=number_format($usd,2); ?> USD</h4></div>
			</div>
		</div>
	</div>
	<div class="table-responsive">
		<table id="data-table" class="table m-0" style="width:100%">
			<thead>
				<tr class="bg-fade">
					<th>#</th>
					<th>Date et Heure</th>
					<th>N* Bon</th>
					<th>Montant</th>
					<th>Dépositaire</th>
					<th>Organisation</th>
					<th>Signature caisse</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach ($bons_entree as $key => $bon):?>
				<tr>
					<th><?=$key+1;?></th>
					<td><?=$bon['date_heure'];?></td>
					<td>N<?=sprintf("%04d",$bon['id_bon']); ?></td>
					<td>
						<?=number_format($bon['montant'],2); 
							if($bon['sign_ac']=='CDF') echo " CDF";
							else echo " USD"; ?>	
					</td>
					<td><?=ucfirst($bon['nom']).' '.ucfirst($bon['prenom']);?></td>
					<td><?=strtoupper($bon['sign_au']);?></td>
					<td><div class="badge badge-warning"><?=strtoupper($bon['id_ben']);?></div></td>									
				</tr>
				<?php endforeach;?>
			</tbody>
		</table>
	</div>
	<hr>


<?php
	
  $bons_sortie = carnetBon::get_all_bon('sortie');

  $bons=array();

	foreach ($bons_sortie as $value) {
		$date_heure=explode(' ', $value['date_heure']);
		if ($date_heure[0]==$date) {
			$bons[]=$value;
		}
	}

	$cdf=0;
	$usd=0;

	foreach ($bons as $montant) {
		if ($montant['sign_ac']=='CDF') {
			$cdf=$cdf+$montant['montant'];
		}

		else $usd=$usd+$montant['montant'];
	}

	$cdf2=$cdf;
	$usd2=$usd;
?>

	<div class="row font-1">
		<div class="col-lg-12">
			<div class="card card-body flex-row align-items-center">
				<h4 class="m-0">Total sortie</h4>
				<div class="badge badge-primary ml-auto"><h4 class="mt-1 mb-0"><?=number_format($cdf,2); ?> CDF | <?=number_format($usd,2); ?> USD</h4></div>
			</div>
		</div>
	</div>
	<div class="table-responsive">
		<table id="data-table" class="table m-0" style="width:100%">
			<thead>
				<tr class="bg-fade">
					<th>#</th>
					<th>Date et Heure</th>
					<th>N* Bon</th>
					<th>Montant</th>
					<th>Bénéficiaire</th>
					<th>Autorisation</th>
					<th>Signature caisse</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach ($bons as $key => $bon):?>
				<tr>
					<th><?=$key+1;?></th>
					<td><?=$bon['date_heure'];?></td>
					<td>N<?=sprintf("%04d",$bon['id_bon']); ?></td>
					<td>
						<?=number_format($bon['montant'],2); 
							if($bon['sign_ac']=='CDF') echo " CDF";
							else echo " USD"; ?>	
					</td>
					<td><?=ucfirst($bon['nom']).' '.ucfirst($bon['prenom']);?></td>
					<td><?=strtoupper($bon['sign_au']);?></td>
					<td><div class="badge badge-warning"><?=strtoupper($bon['id_ben']);?></div></td>										
				</tr>
				<?php endforeach;?>
			</tbody>
		</table>
	</div>
	<hr>
	<div class="row font-1">
		<div class="col-lg-12">
			<div class="card card-body flex-row align-items-center">
				<h4 class="m-0">Balance</h4>
				<div class="badge badge-primary ml-auto"><h4 class="mt-1 mb-0"><?=number_format($cdf0+$cdf1-$cdf2,2); ?> CDF | <?=number_format($usd0+$usd1-$usd2,2); ?> USD</h4></div>
			</div>
		</div>
	</div>
</div>