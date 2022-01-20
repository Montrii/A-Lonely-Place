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


    $sqlStatement = "SELECT * FROM inventory";
    $sqlResult = mysql_query($sqlStatement);

    if(!$sqlResult)
    {
        $message  = 'Ungültige Abfrage: ' . mysql_error() . "\n";
        $message .= 'Gesamte Abfrage: ' . $query;
        echo $message;
    }
    else 
    {
        echo "works!"; 
    }
    $connection->close();
?>