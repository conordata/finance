<?php

include_once 'rapport.php';

class RapportBilan
{        
    
   	static function get_bilan_cdf()
    {

        $bon_entree=Rapport::get_bons('entree', 'CDF');
        $bon_sortie=Rapport::get_bons('sortie', 'CDF');
        $carnet=Rapport::get_book('CDF');

       	
       	$date_debut=date('Y-m-01', time());
       	$date_fin=date('Y-m-d', time());

        $rows=(strtotime($date_fin) - strtotime($date_debut));
        $rows=($rows/86400)+1;

       	$bilan=array();
        $i=1;

       	$tot_entree=0;	//total de entree
       	$tot_sortie=0;	//total sortie
       	$tot_recu=0;	//total recu

       	while ($i<=$rows) {
       		
       		$entree=0;
       		foreach ($bon_entree as $key => $value) {
       			$date_heure=explode(' ', $value['date_heure']);
       			if ($date_heure[0]==$date_debut) {
       				$entree+=$value['montant'];
       			}
       		}

       		$sortie=0;
       		foreach ($bon_sortie as $key => $value) {
       			$date_heure=explode(' ', $value['date_heure']);
       			if ($date_heure[0]==$date_debut) {
       				$sortie+=$value['montant'];
       			}
       		}

       		$recu=0;
       		foreach ($carnet as $key => $value) {
       			if ($value['date_payment']==$date_debut) {
       				$recu+=$value['montant'];
       			}
       		}

       		$tot_entree+=$entree;
       		$tot_sortie+=$sortie;
       		$tot_recu+=$recu;

       		$bilan[]=array('date'=>$date_debut,'carnet'=>$recu,'entree'=>$entree,'sortie'=>$sortie,'tot_entree'=>$tot_entree,'tot_sortie'=>$tot_sortie,'tot_recu'=>$tot_recu);

       		$i++;
       		$date_debut=date('Y-m-'.sprintf("%02d", $i), time());
       		
       	}

        return $bilan;
    }

    static function get_bilan_usd()
    {
        $bon_entree=Rapport::get_bons('entree', 'USD');
        $bon_sortie=Rapport::get_bons('sortie', 'USD');
        $carnet=Rapport::get_book('USD');
       	
       	$date_debut=date('Y-m-01', time());
        $date_fin=date('Y-m-d', time());

        $rows=(strtotime($date_fin) - strtotime($date_debut));
        $rows=($rows/86400)+1;

       	$bilan=array();
       	$i=sprintf("%02d", 1);

       	$tot_entree=0;	//total de entree
       	$tot_sortie=0;	//total sortie
       	$tot_recu=0;	//total recu

       	while ($i<=$rows) {
       		
       		$entree=0;	//entree par jour
       		foreach ($bon_entree as $key => $value) {
       			$date_heure=explode(' ', $value['date_heure']);
       			if ($date_heure[0]==$date_debut) {
       				$entree+=$value['montant'];
       			}
       		}

       		$sortie=0;	//sortie par jour
       		foreach ($bon_sortie as $key => $value) {
       			$date_heure=explode(' ', $value['date_heure']);
       			if ($date_heure[0]==$date_debut) {
       				$sortie+=$value['montant'];
       			}
       		}

       		$recu=0;	//recu par jour
       		foreach ($carnet as $key => $value) {
       			if ($value['date_payment']==$date_debut) {
       				$recu+=$value['montant'];
       			}
       		}

       		$tot_entree+=$entree;
       		$tot_sortie+=$sortie;
       		$tot_recu+=$recu;

       		$bilan[]=array('date'=>$date_debut,'carnet'=>$recu,'entree'=>$entree,'sortie'=>$sortie,'tot_entree'=>$tot_entree,'tot_sortie'=>$tot_sortie,'tot_recu'=>$tot_recu);

       		$i++;
       		$date_debut=date('Y-m-'.$i, time());
       		
       	}

        return $bilan;
    }

}
