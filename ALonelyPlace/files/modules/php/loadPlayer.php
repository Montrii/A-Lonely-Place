<?php
    $servername = "localhost";
    $database = "u867191320_ALonelyPlace";
    $user_db = "u867191320_montri";
    $password_db = "JrUtMK12.";

    $conn = mysqli_connect($servername, $user_db, $password_db, $database);

    // Check Connection
    if(!$conn)
    {
        echo 'Connection error: ' . mysqli_connect_error();
    }
    else 
    {
        $sqlUser = "SELECT * FROM inventory WHERE user = '" . $_GET['ip'] . "'";
        $result = mysqli_query($conn, $sqlUser);
        $user = mysqli_fetch_all($result, MYSQLI_ASSOC);
        if(count($user) < 1)
        {
            $sqlInsert = "INSERT INTO inventory (user) VALUES('" . $_GET['ip'] . "')";
            $result = mysqli_query($conn, $sqlInsert);
            echo 1;
        }
        else 
        {
            echo $user[0]['map'];
        }
    mysqli_close($conn);
    }
?>