<?php

    require_once('../src/dbconn.php');

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    $connection->set_charset("utf8");
    
    //HOME
    $sql = "SELECT * FROM home";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $nm_prox_evento =  $row['nm_prox_evento'];
            $link_prox_evento =  $row['link_prox_evento'];
            $video =  $row['link_video'];
        }
    }
    
    //TITULO COLAB
    $sql = "SELECT * FROM colab";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $colab =  $row['nm_colab'];
        }
    }
    
    $connection->close();
    
    
    //DATA COLAB
    $sql = "SELECT * FROM colab_data";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data_um =  $row['data_um'];
            $data_dois =  $row['data_dois'];
            $data_tres =  $row['data_tres'];
        }
    }
    
?>