<?php
    $servername = "locahost";
    $database = "u867191320_ALonelyPlace";
    $user_db = "u867191320_montriii";
    $password_db = "JrUtMK12.";

    $conn = mysqli_connect($servername, $user_db, $password_db, $database);

    // Check Connection
    if(!$conn)
    {
        echo 'Connection error: ' . mysqli_connect_error();
    }
?>