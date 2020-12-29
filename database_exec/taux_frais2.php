
<?php 

include_once 'taux_frais.php';

	if (isset($_POST['taux'])) {

		$rqst='INSERT INTO taux (date_, taux) VALUES ("'.date("Y-m-d", time()).'", "'.$_POST['taux_dollar'].'")';

		Taux_Frais::insert_data($rqst);
		
	}


	if (isset($_POST['new_fee'])) {

		$ref_fee=Taux_Frais::get_fees("SELECT MAX(reference) FROM fees");
			
		if (count(Taux_Frais::get_fees("SELECT reference FROM fees"))==0) {
			$ref_fee="f01";
		} 
		else {
			$ref_fee=$ref_fee[0]['MAX(reference)'];
			$ref_fee++;
		}

		$rqst1='INSERT INTO fees (title, reference) VALUES ("'.$_POST['n_frais'].'", "'.$ref_fee.'")';

		$rqst2='ALTER TABLE register ADD '.$ref_fee.' INT(11) DEFAULT(0)';
		$rqst3='ALTER TABLE class ADD '.$ref_fee.' INT(11) DEFAULT(0)';

		Taux_Frais::insert_data($rqst1);
		Taux_Frais::insert_data($rqst2);
		Taux_Frais::insert_data($rqst3);

	}


	if (isset($_POST['n_option'])) {

		$rqst='INSERT INTO section (nom_section, reference) VALUES ("'.$_POST['section'].'", "'.strtoupper($_POST['ref_section']).'")';

		Taux_Frais::insert_data($rqst);

	}


	if (isset($_POST['n_classe'])) {

		$class_ref=$_POST['classe']." ".ucfirst($_POST['option'])." ".$_POST['s_classe'];

		$rqst='INSERT INTO class (classe, section, sous_classe, reference) VALUES ("'.$_POST['classe'].'", "'.$_POST['option'].'", "'.$_POST['s_classe'].'", "'.$class_ref.'")';

		Taux_Frais::insert_data($rqst);

	}

	
	header("location: ../taux_frais.php");
