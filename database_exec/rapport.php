<?php

include_once 'database.php';

class Rapport
{

    static function get_bons($type="",$devise="")
    {
        $con=database();
        $req=$con->prepare('SELECT date_heure, montant FROM carnet_de_bon WHERE type=? AND sign_ac=?');
        $req->execute(array($type, $devise));
        return $req->fetchAll();
    }

    static function get_book($devise="")
    {
        $con=database();
        $req=$con->prepare('SELECT date_payment, montant FROM book WHERE devise=?');
        $req->execute(array($devise));
        return $req->fetchAll();
    }

}
