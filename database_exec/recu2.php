<?php

include_once "recu.php";

	if(!isset($_SESSION))
	{
	  session_start();
	}

	$date=date("Y-m-d", time());

	//recu
	if(isset($_POST['receipt'])) {

		//montant payE, devise, motif
		$montant=$_POST['montant'];
		$devise=$_POST['devise'];
		$motif=$_POST['motif'];

		//Identites
		$nom=$_POST['nom'];
		$post_nom=$_POST['post_nom'];
		$prenom=$_POST['prenom'];

		//classe et option
		$classe=$_POST['classe'];

		//conversion montant
		if ($devise=="USD") $taux=Taux_Frais::get_taux();

		else $taux=1;

		$cdf=$montant*$taux;

		//ID eleve
		if (!isset($_SESSION['student'])) {
		
			//id eleve
			$eleve=Fregister::get_last_id();
		
			if (Fregister::count_all_eleve()==0) {
				$eleve="id000001";
			} 
			else {
				$eleve=$eleve[0]['MAX(id_eleve)'];
				$eleve++;
			}

			Recu::insert_data('INSERT INTO register (id_eleve, nom, post_nom, prenom, classe, minerval) VALUES ("'.$eleve.'", "'.$nom.'", "'.$post_nom.'", "'.$prenom.'", "'.$classe.'", "'.$cdf.'")');
		}

		else {
			$eleve=$_SESSION['student'][0]['id_eleve'];
			$old_montant=$_SESSION['student'][0][$motif];
			$new_montant=$cdf+$old_montant;
			
			Recu::insert_data('UPDATE register SET nom="'.$nom.'", post_nom="'.$post_nom.'", prenom="'.$prenom.'", classe="'.$classe.'", '.$motif.'="'.$new_montant.'" WHERE id_eleve="'.$eleve.'"');

			$_SESSION['student']=Recu::get_info_student($eleve);
		}

		$recu=$_POST['id_classe'];
		$motif_name=Taux_Frais::get_fees('SELECT title FROM fees WHERE reference="'.$motif.'"');
		
		if (count($motif_name)==0) {
			$motif_name[0]['title']='';
		}
		
		if ($montant!=0) {
			
			Recu::insert_data('INSERT INTO book (date_payment, numero_recu, id_eleve, nom, post_nom, prenom, montant, devise, taux, motif, motif_name, signature) VALUES ("'.$date.'", "'.$recu.'", "'.$eleve.'", "'.$nom.'", "'.$post_nom.'", "'.$prenom.'", "'.$montant.'", "'.$devise.'", "'.$taux.'", "'.$motif.'", "'.$motif_name[0]['title'].'", "idS001")');
		}
		
	}

	header("location: ../recu.php");