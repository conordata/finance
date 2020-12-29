<?php

if(!isset($_SESSION))
{
    session_start();
}
if(isset($_POST['nom'],$_POST['postnom'],$_POST['prenom'],$_POST['libelle'],$_POST['montant'],$_POST['sign_ac'],$_POST['sign_au']))
{

    include_once '../database_exec/carnet.php';
    include_once '../database_exec/carnetBon.php';



    $carnet=new Carnet(null,$_POST['nom'],$_POST['postnom'],$_POST['prenom'],$_POST['libelle'],$_POST['montant'],$_POST['id_ben'],$_POST['sign_ac'],$_POST['sign_au'],$_SESSION['id'],$_POST['type']);

    $res=carnetBon::add_bon_de_sortie($carnet);
    if(is_numeric($res))
    {
        if($_POST['type']=="sortie")
        {
            header('Location: ../bon_de_sortie.php');
        }else
        {
            header('Location: ../bon_entree.php');
        }

    }
}else
{
    var_dump($_POST);
}