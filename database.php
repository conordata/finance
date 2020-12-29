

<?php

date_default_timezone_set('Asia/Kolkata');

function database ($query, $sql) {
	$dsn = "mysql:host=localhost;dbname=finance";
	$username = "dist";
	$password = "1234";
    
    try {
        $conn = new PDO( $dsn, $username, $password );
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } 
    catch (PDOException $e) {
        echo "Connection failed: " .$e->getMessage();
        die;
    }
    
    // try {
    	$result=$conn->query($sql);
    // }
    // catch (PDOException $e) {
    // 	echo "
    // 		<script>
    // 			alert('Duplicate value detected');
    // 		</script>
    // 	";
    // 	die;
    // }

	if ($query=="r") {

			$array=array();

		    foreach ($result as $row) {
		    	$array[]=$row;	
		    }

		    return $array;
		}

	$conn = null;
}

function info_student($id) {

  $student=database('r','SELECT * FROM register WHERE id_eleve="'.$id.'"');

  if (count($student)!=0) {
    $_SESSION['student']=$student;

  }

  else echo "<script>
              alert('Vous avez entré un Identifiant inéxistant');
            </script>";
}

function name_student ($id) {
  
  $student=database('r','SELECT nom, post_nom, prenom FROM register WHERE id_eleve="'.$id.'"');

  return $student;
}


//taux
function taux_du_jour ($i=0) {
  $taux=database('r', 'SELECT * FROM taux');

  if ($i) {
    return $taux;
  }

  else {
        
    if(count($taux)!=0) {
      $taux_du_jour=$taux[count($taux)-1]['taux'];

      return $taux_du_jour;
    }
    else return 1;
  }
}

function section() {
  return database('r', 'SELECT * FROM section');
}

function classe() {
  return database('r', 'SELECT * FROM class');
}


?>