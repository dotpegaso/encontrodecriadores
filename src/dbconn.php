<?php

    $host = "mysql796.umbler.com";
    $user = "heitor";
    $pass = "fwxgy2hvxj";
    $db = "dbedc";
    $port = 3306;
    
    try{
        $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
        
        $sql = "SELECT inscritos FROM programacao WHERE id = 2";
        $result = $connection->query($sql);
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $inscritos_update = $row['inscritos'] + 1;
            }
        }
        
        $sql = "UPDATE programacao SET inscritos=$inscritos_update WHERE id=2";
        
        if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
        } else {
        echo "Error updating record: " . $conn->error;
        }
        
        $connection->close();
        

    }catch(Exception $e){
        echo "ERRORCONN"; 
    }

?>