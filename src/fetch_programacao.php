<?php

    $host = "mysql796.umbler.com";
    $user = "heitor";
    $pass = "fwxgy2hvxj";
    $db = "dbedc";
    $port = 3306;
    
    try{
        $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    }catch(Exception $e){
        echo "ERRORCONN"; 
    }

    $sql = "SELECT * FROM programacao WHERE ativo = true";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo $row['nome'] . ' - ' . $row['responsavel'];
        }
    }
    
    $connection->close();

?>