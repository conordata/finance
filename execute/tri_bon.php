<?php



include_once '../database_exec/carnetBon.php';


$bons=carnetBon::tri_bon_date_debut_and_fin($_POST['type'],$_POST['debut'],$_POST['fin']);

echo var_dump($_POST);