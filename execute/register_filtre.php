<?php


include_once '../database_exec/recu.php';

    $statistiques=array();
    $non_statistiques=array();

    if(isset($_POST['frais']) && $_POST['frais'] != 'minverval')
    {
        $statistiques=Recu::get_others_fee_ordre($_POST['class_id'],$_POST['frais']);
        $non_statistiques=Recu::get_others_fee_ordre_non($_POST['class_id'],$_POST['frais']);
    }else
    {
        $statistiques=Recu::get_statistique_minverval_ok($_POST['class_id'],$_POST['mois']);
        // $non_statistiques=Recu::get_statistique_minverval_non($_POST['class_id'],$_POST['mois']);
    }

    $div_liste="
      <table class=\"table\">
        <thead class=\"thead-dark\">
        <tr>
            <th scope=\"col\" class=\"text-center\">#</th>
            <th scope=\"col\" class=\"text-center\">Nom</th>
            <th scope=\"col\" class=\"text-center\">Postnom</th>
            <th scope=\"col\" class=\"text-center\">Prenom</th>
            <th scope=\"col\" class=\"text-center\">Etat</th>
        </tr>
        </thead>
        <tbody>
      ";

//if(isset($_POST['class_id'],$_POST['mois'],$_POST['frais']))
//echo Recu::total_minverval_par_class_limit($_POST['class_id'],$_POST['mois']);
//echo var_dump($statistiques);

    foreach ($statistiques as $key => $statistique)
    {
        $keyy=$key+1;
        $nom=$statistique['nom'];
        $postnom=$statistique['post_nom'];
        $prenom=$statistique['prenom'];
        $etat="En ordre";
        $div_liste.="
        <tr>
          <th class=\"align-middle text-center\" scope=\"row\">$keyy</th>
          <td class=\"align-middle text-center\">$nom</td>
          <td class=\"align-middle text-center\">$postnom</td>
          <td class=\"align-middle text-center\">$prenom</td>
          <td class=\"align-middle text-center\">$etat</td>
        </tr>
      ";
    }


    $div_liste.="
</tbody>
</table>
</div>

<div class=\"table-responsive\">
<table class=\"table mb-0\">
  <thead id=\"haut_tab\" class=\"thead-light\">
      <tr>
          <th scope=\"col\" class=\"text-center\">#</th>
          <th scope=\"col\" class=\"text-center\">Nom</th>
          <th scope=\"col\" class=\"text-center\">Postnom</th>
          <th scope=\"col\" class=\"text-center\">Prenom</th>
          <th scope=\"col\" class=\"text-center\">Etat</th>

      </tr>
  </thead>
  <tbody id=\"bas_tab\">
";


    foreach ($non_statistiques as $k => $st)
    {
        $key=$k+1;
        $nom=$st['nom'];
        $postnom=$st['post_nom'];
        $prenom=$st['prenom'];
        $etat="Non en ordre";
        $div_liste.="
            <tr>
              <th class=\"align-middle text-center\" scope=\"row\">$key</th>
              <td class=\"align-middle text-center\">$nom</td>
              <td class=\"align-middle text-center\">$postnom</td>
              <td class=\"align-middle text-center\">$prenom</td>
              <td class=\"align-middle text-center\">$etat</td>
            </tr>
            ";
    }


    $div_liste.="
    </tbody>
</table>";


    echo $div_liste;


