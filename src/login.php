<?php

    require_once('../src/dbconn.php');

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
    $pass = $_POST['pass'];
    
    $sql = "SELECT senha FROM credencial";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $senha =  $row['senha'];
        }
    }
    
    $connection->close();
    
    if( $senha == $pass ){
        header("location:https://encontrodecriadores.art/heitor/admin.php");
        exit();
    }else{
        echo 'false';
    }
    
?>