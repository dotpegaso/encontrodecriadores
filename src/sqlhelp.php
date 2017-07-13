<?php

    // GLOBAL
    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
    
    // INSERT
    $sql = "INSERT INTO programacao (nome, responsavel, horario, descricao, inscritos) VALUES ('Show Zeppelin', 'Page', 21, 'Descrição do show', 0)";
    $connection->query($sql);
    $connection->close();
    
    
    
    
    
    
    //SELECT
    $sql = "SELECT * FROM programacao";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo $row['nome'] . ' - ' . $row['responsavel'];
        }
    }
    
    $connection->close();
    
    
    
    
    
    
    // UPDATE INSCRITOS
    $sql = "SELECT inscritos FROM programacao WHERE id = $id";
    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $inscritos_update = $row['inscritos'] + 1;
        }
    }
    
    $sql = "UPDATE programacao SET inscritos=$inscritos_update WHERE id=2";
    $connection->query($sql);
    
    $connection->close();
    

?>