<?php

    require_once('src/dbconn.php');

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
    $sql = "SELECT nm_prox_evento FROM home";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $evento =  $row['nm_prox_evento'];
            $link =  $row['link_prox_evento'];
            $video =  $row['link_video'];
        }
    }
    
    $connection->close();
    
?>