<?php

include_once 'database.php';
require 'taux_frais.php';
require 'fregister.php';

class Recu
{

    static function get_recu()
    {
        $con=database();
        $req=$con->prepare('SELECT MAX(numero_recu) FROM book');
        $req->execute();
        return $req->fetchAll();
    }

    static function get_classe_by_ref($ref)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM class WHERE reference=?');
        $req->execute(array($ref));
        return $req->fetchAll();
    }

    static function get_info_student($id)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM register WHERE id_eleve=?');
        $req->execute(array($id));
        return $req->fetchAll();
		}

    static function get_fees()
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM fees ORDER BY title ASC');
        $req->execute();
        return $req->fetchAll();
    }

    static function insert_data($rqst)
    {
        $con=database();
        $req=$con->prepare($rqst);
        $req->execute();
    }

    static function total_minverval_par_class($classe)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM class WHERE reference=?');
        $req->execute(array($classe));
        $somme=0;
        $data=$req->fetch();
        for($i=1;$i<11;$i++)
        {
            $somme+=$data['m'.$i];
        }
        return $somme;

    }

    static function total_minverval_par_class_limit($classe,$limite)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM class WHERE reference=?');
        $req->execute(array($classe));
        $data=$req->fetch();
        $somme=$data['inscription'];
        for($i=1;$i<$limite+1;$i++)
        {
            $somme+=$data['m'.$i];
        }
        return $somme;

    }

    static function get_statistique_minverval($class)
    {
        $con=database();

        $req=$con->prepare('SELECT * FROM register WHERE classe=? AND minerval < ?');
        $req->execute(array($class,self::total_minverval_par_class($class)));
        return $req->fetchAll();
    }

    static function get_statistique_minverval_ok($class,$taile)
    {
        $con=database();

        $req=$con->prepare('SELECT * FROM register WHERE classe=? AND minerval >= ? ORDER BY nom ASC');
        $req->execute(array($class,self::total_minverval_par_class_limit($class,$taile)));
        return $req->fetchAll();
    }
    
    static function get_statistique_minverval_non($class,$taile)
    {
        $con=database();

        $req=$con->prepare('SELECT * FROM register WHERE id_eleve NOT IN(SELECT id_eleve FROM register WHERE classe=? AND minerval = ?)');
        $req->execute(array($class,self::total_minverval_par_class_limit($class,$taile)));
        return $req->fetchAll();
    }

    static function  get_others_fee_ordre($class,$frais)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM class c, register r  WHERE c.reference=? AND r.classe= ?  AND c.'.$frais.' =  r.'.$frais);
        $req->execute(array($class,$class));

        return $req->fetchAll();

    }

    static function  get_others_fee_ordre_non($class,$frais)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM class c, register r  WHERE c.reference=? AND r.classe= ?  AND c.'.$frais.' <>  r.'.$frais);
        $req->execute(array($class,$class));

        return $req->fetchAll();

    }

   
}
