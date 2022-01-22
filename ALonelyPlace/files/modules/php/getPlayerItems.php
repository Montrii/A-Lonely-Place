<?php
    $servername = "localhost";
    $database = "u867191320_ALonelyPlace";
    $user_db = "u867191320_montri";
    $password_db = "JrUtMK12.";

    $conn = mysqli_connect($servername, $user_db, $password_db, $database);
    $sqlUser = "SELECT * FROM inventory";
    // Check Connection
    if(!$conn)
    {
        echo 'Connection error: ' . mysqli_connect_error();
    }
    else 
    {
        $result = mysqli_query($conn, $sqlUser);
        $userInfo = mysqli_fetch_all($result, MYSQLI_ASSOC);
        //echo print_r($userInfo);
        for($i = 0; $i < count($userInfo); $i++)
        {
            echo "HI: " . $userInfo[$i]['user'];
            echo "HI2: " . $_GET['ip'];
        }
    }
    mysqli_close($conn);
?>
