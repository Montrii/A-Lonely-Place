<?php
    $servername = "locahost";
    $database = "u867191320_ALonelyPlace";
    $user_db = "u867191320_montri";
    $password_db = "JrUtMK12.";

    $connection = new mysqli($servername, $user_db, $password_db);
    if (mysqli_connect_error()) 
    {
        echo false;
    }
    echo $_GET['ip'];


    $connection->close();
?>