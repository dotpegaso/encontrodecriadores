<?php

    $host = "mysql796.umbler.com";
    $user = "heitor";
    $pass = "fwxgy2hvxj";
    $db = "dbedc";
    $port = 3306;
    
    try{
        $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
        echo "Connected successfully"; 
        
        $sql = "INSERT INTO programacao (nome, responsavel, horario, descricao, inscritos) VALUES ('Show Zeppelin', 'Page', 21, 'Descrição do show', 0)";
        $connection->query($sql);
        $connection->close();
        
        

    }catch(Exception $e){
        echo "ERRORCONN"; 
    }

?>