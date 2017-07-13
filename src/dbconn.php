<?php

    $host = "mysql796.umbler.com";
    $user = "heitor";
    $pass = "fwxgy2hvxj";
    $db = "dbedc";
    $port = 3306;
    
    try{
        $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
        echo "Connected successfully"; 
        
        $sql = "SELECT * FROM programacao";
        $result = $connection->query($sql);
        
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo $row;
            }
        } else {
            echo "0 results";
        }
        
        $connection->close();

    }catch(Exception $e){
        echo "ERRORCONN"; 
    }

?>