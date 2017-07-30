<?php
    require_once('../src/dbconn.php');

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
    $nome_evento = $_POST['nm_prox_evento'];
    $link_evento = $_POST['link_prox_evento'];
    $link_video = $_POST['video'];
    
    // INSERT
    $sql = "INSERT INTO home (nm_prox_evento, link_prox_evento, link_video) VALUES ($nome_evento, $link_evento, $link_video)";
    $connection->query($sql);
    $connection->close();
    
    $connection->close();
    
?>