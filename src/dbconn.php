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
            while($row = $result->fetch_assoc()) {
                echo $row['nome'] . ' - ' . $row['responsavel'];
            }
        } else {
            echo "0 results";
        }

    }catch(Exception $e){
        echo "ERRORCONN"; 
    }

?>