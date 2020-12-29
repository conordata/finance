<?php

include_once 'database.php';
include_once 'carnet.php';


class carnetBon
{


    static function add_bon_de_sortie(Carnet $carnet)
    {
        $con=database();
        $pre=$con->prepare('INSERT INTO carnet_de_bon SET nom=?,postnom=?,prenom=?,montant=?,libelle=?,id_ben=?,sign_ac=?,sign_ca=?,sign_au=?,type=?');
        $pre->execute(array(
            $carnet->getNom(),
            $carnet->getPostnom(),
            $carnet->getPrenom(),
            $carnet->getMontant(),
            $carnet->getLibelle(),
            $carnet->getIdBen(),
            $carnet->getSignAc(),
            $carnet->getSignCa(),
            $carnet->getSignAu(),
            $carnet->getType()
        ));
        return $con->lastInsertId();
    }

    static function get_all_bon($type="")
    {
        $con=database();
        $pre=$con->prepare('SELECT * FROM carnet_de_bon WHERE type=?');
        $pre->execute(array($type));
        return $pre->fetchAll();
    }

    static function get_liste_bon_by_id($id="")
    {
        $con=database();
        $pre=$con->prepare('SELECT * FROM carnet_de_bon,users WHERE id_ben=? AND users.id_us=sign_cai');
        $pre->execute(array($id));
        return $pre->fetchAll();
    }

    static function tri_bon_date_debut_and_fin($type="",$date_debu="",$date_fin="")
    {
        $con=database();
        $pre=$con->prepare('SELECT * FROM carnet_de_bon WHERE type=? AND date_heure BETWEEN '.$date_debu.' AND '.$date_fin );
        $pre->execute(array($type));

        return $pre->fetchAll();
    }


}




