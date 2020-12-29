<?php

include_once 'database.php';

class Book
{

    static function get_all_book()
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM book ORDER BY numero_recu DESC');
        $req->execute();
        return $req->fetchAll();
    }

    static function get_all_book_day($date)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM book WHERE date_payment=?');
        $req->execute(array($date));
        return $req->fetchAll();
    }

    static function get_identity($id)
    {
        $con=database();
        $req=$con->prepare('SELECT nom, post_nom, prenom FROM register WHERE id_eleve=?');
        $req->execute(array($id));
        return $req->fetchAll();
    }
}
