<?php

    require_once('../src/dbconn.php');

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
    $sql = "SELECT * FROM colab_data";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data_um =  $row['data_um'];
            $data_dois =  $row['data_doi'];
            $data_tres =  $row['data_tres'];
        }
    }
    
    $connection->close();
    
?>