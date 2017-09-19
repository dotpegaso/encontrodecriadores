<?php
    require_once('../src/dbconn.php');

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    $connection->set_charset("utf8");
    
    $nome_evento = $_POST['nm_prox_evento'];
    $link_evento = $_POST['link_prox_evento'];
    $link_video = $_POST['video'];
    
    $colab = $_POST['nm_colab'];
    
    $data_um = $_POST['data_um'];
    $data_dois = $_POST['data_dois'];
    $data_tres = $_POST['data_tres'];
    
    // INSERT
    $sql = "DELETE FROM home";
    $connection->query($sql);
    $sql = "INSERT INTO home (nm_prox_evento, link_prox_evento, link_video) VALUES ('$nome_evento', '$link_evento', '$link_video')";
    $connection->query($sql);
    
    $sql = "DELETE FROM colab";
    $connection->query($sql);
    $sql = "INSERT INTO colab (nm_colab) VALUES ('$colab')";
    $connection->query($sql);
    
    $sql = "DELETE FROM data";
    $connection->query($sql);
    $sql = "INSERT INTO data (data_um, data_dois, data_tres) VALUES ('$data_um', '$data_dois', '$data_tres')";
    $connection->query($sql);
    
    $connection->close();
?>