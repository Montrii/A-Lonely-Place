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
        $userInfo = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $mapLevel = intval($userInfo[0]['map']); 
        $newLevel = $mapLevel+1;
        $result = mysqli_query($conn, "UPDATE inventory SET map = " . $newLevel . " WHERE user = '" . $_GET['ip'] . "'");
    }
    mysqli_close($conn);
?>