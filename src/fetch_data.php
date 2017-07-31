<?php

    require_once('../src/dbconn.php');

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
  
    
    $connection->close();
    
?>