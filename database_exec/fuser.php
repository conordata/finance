<?php

include_once 'database.php';
include_once 'user.php';
class Fuser
{

    static function add_new_user(User $user)
    {
        $con=database();
        $req=$con->prepare('INSERT INTO users SET nom=?,postnom=?prenom=?,identifiant=?,mot_de_passe=?');
        $req->execute(array(
            $user->getNom(),
            $user->getPostnom(),
            $user->getPrenom(),
            $user->getIdentifiant(),
            $user->getMotDePasse()
        ));
        return $con->lastInsertId();
    }
    static function login_user($iden,$pass)
    {
        $con=database();
        $req=$con->prepare('SELECT * FROM users WHERE identifiant=? AND mot_de_passe=?');
        $req->execute(array($iden,$pass));
        return $req->fetch();
    }


}