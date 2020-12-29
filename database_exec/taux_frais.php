<?php

include_once 'database.php';

class Taux_Frais
{

	static function get_taux($i=0)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM taux');
        $req->execute();

        $array=array();

		    foreach ($req as $row) {
		    	$array[]=$row;	
		    }

        if ($i) {
		    return $array;
			  }

			  else {
			        
			    if(count($array)!=0) {
			      $taux_du_jour=$array[count($array)-1]['taux'];

			      return $taux_du_jour;
			    }
			    else return 1;
	  		}
    }

    
    static function get_section()
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM section ORDER BY nom_section ASC');
        $req->execute();
        return $req->fetchAll();
    }

    static function get_fees($rqst)
    {
        $con=database();
        $req=$con->prepare($rqst);
        $req->execute();
        return $req->fetchAll();
    }

    static function get_frais()
    {
        $con=database();
        $req=$con->prepare("SELECT * FROM fees");
        $req->execute();
        return $req->fetchAll();
    }

    static function insert_data($rqst)
    {
        $con=database();
        $req=$con->prepare($rqst);
        $req->execute();
    }
}