<?php
    $servername = "localhost";
    $database = "u867191320_ALonelyPlace";
    $user_db = "u867191320_montri";
    $password_db = "JrUtMK12.";

    $conn = mysqli_connect($servername, $user_db, $password_db, $database);
    $sqlUser = "SELECT * FROM inventory WHERE user = '" . $_GET['ip'] . "'";
    // Check Connection
    if(!$conn)
    {
        echo 'Connection error: ' . mysqli_connect_error();
    }
    else 
    {
        $result = mysqli_query($conn, $sqlUser);
        $userInfo = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo $userInfo[0]['item1'] . ";" . $userInfo[0]['item2'] . ";" . $userInfo[0]['item3'] . ";" . $userInfo[0]['item4'] . ";" . $userInfo[0]['item5'];
        echo $userInfo[0]['rareity1'] . ";" . $userInfo[0]['rareity2'] . ";" . $userInfo[0]['rareity3'] . ";" . $userInfo[0]['rareity4'] . ";" . $userInfo[0]['rareity5'];
    }
    mysqli_close($conn);
?>
