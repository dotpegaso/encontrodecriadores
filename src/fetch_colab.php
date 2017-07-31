<?php

    require_once('../src/dbconn.php');

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
    $sql = "SELECT * FROM colab";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $colab =  $row['nm_colab'];
        }
    }
    
    $connection->close();
    
?>