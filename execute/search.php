<?php


include_once '../database_exec/database.php';


$con=database();

$pre=$con->prepare('SELECT * FROM fees_register WHERE CONCAT(id_number," ",fname," ",lname," ",sname) LIKE :search');
$pre->execute(array('search' => '%'.$_GET['search'].'%'));


