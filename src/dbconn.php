<?php
    
    //Connect to the database
    $host = "mysql796.umbler.com";
    $user = "heitor";                     //Your Cloud 9 username
    $pass = "fwxgy2hvxj";                                  //Remember, there is NO password by default!
    $db = "dbedc";                                  //Your database name you want to connect to
    $port = 3306;                                //The port #. It is always 3306
    
    try{
        $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
        echo "Connected successfully"; 
    }
    catch(Exception $e)
    {
        var_dump($e);
        echo "ERROR"; 
    }
    

?>