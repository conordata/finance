

<?php

date_default_timezone_set('Asia/Kolkata');

function database () {
	$dsn = "mysql:host=localhost;dbname=finance";
	$username = "root";
	$password = "";
    
    try {
        $conn = new PDO( $dsn, $username, $password );
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } 
    catch (PDOException $e) {
        echo "Connection failed: " .$e->getMessage();
        die;
    }

    return $conn;

}

?>