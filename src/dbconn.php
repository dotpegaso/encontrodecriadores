<?php
    
    //Connect to the database
    $host = "mysql796.umbler.com";
    $user = "heitor";                     //Your Cloud 9 username
    $pass = "fwxgy2hvxj";                                  //Remember, there is NO password by default!
    $db = "dbedc";                                  //Your database name you want to connect to
    $port = 3306;                                //The port #. It is always 3306
    
    try{
        $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
        echo "Connected successfully"; 
        
        $sql = "INSERT INTO programacao (descricao, horario, inscritos, nome, responsavel)
        VALUES ('TesteDescricao', 14, 0, 'Show Matanza', 'John Cena')";
        
        if ($connection->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $connection->error;
        }
        
        $connection->close();
        
    }
    catch(Exception $e)
    {
        var_dump($e);
        echo "ERROR"; 
    }
    

?>