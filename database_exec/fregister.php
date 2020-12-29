<?php
include_once 'database.php';

class Fregister
{
    static function get_all_classe()
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM class ORDER BY classe ASC');
        $req->execute(array());
        return $req->fetchAll();
    }

    static function count_eleve($classe)
    {
        $con=database();
        $req=$con->prepare('SELECT COUNT(*) as nombre FROM register WHERE classe=?');
        $req->execute(array($classe));
        return $req->fetch()['nombre'];

    }

    static function count_all_eleve()
    {
        $con=database();
        $req=$con->prepare('SELECT COUNT(*) as nombre FROM register');
        $req->execute(array());
        return $req->fetch()['nombre'];

    }

    static function get_montant_a_payer($classe)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM class WHERE reference=?');
        $req->execute(array($classe));
        return $req->fetch();

    }

    static function get_eleve_classe($classe)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM register WHERE classe=? ORDER BY nom ASC');
        $req->execute(array($classe));
        return $req->fetchAll();
    }

    static function get_last_id()
    {
        $con=database();
        $req=$con->prepare('SELECT MAX(id_eleve) FROM register');
        $req->execute();
        return $req->fetchAll();
    }

}