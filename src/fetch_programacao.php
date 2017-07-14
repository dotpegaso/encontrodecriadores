<?php

    $sql = "SELECT * FROM programacao WHERE ativo = true";
    $result = $connection->query($sql);
    $connection->close();

?>