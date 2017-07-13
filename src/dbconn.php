<?php

    $host = "mysql796.umbler.com";
    $user = "heitor";
    $pass = "fwxgy2hvxj";
    $db = "dbedc";
    $port = 3306;
    
    try{
        $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
        echo "Connected successfully"; 
        
        $result = mysql_query("SELECT * FROM programacao WHERE id = 1");
        $row = mysql_fetch_row($result);
        
        echo $row[0]; // 42
        echo $row[1]; // the email value
        echo $row[3];

    }catch(Exception $e){
        echo "ERRORCONN"; 
    }

?>