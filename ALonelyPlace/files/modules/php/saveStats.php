<?php
    $servername = "locahost";
    $database = "u867191320_ALonelyPlace";
    $user_db = "u867191320_montri";
    $password_db = "JrUtMK12.";

    $connection = new mysqli($servername, $user_db, $password_db, $database);
    if ($connection -> connect_errno) 
    {
        echo false;
    }
    if($result = $connection -> query("SELECT * FROM inventory WHERE user_name = '". $_GET['ip'] . "'"))
    {
        
    }
    echo "HI";

    $connection->close();
?>