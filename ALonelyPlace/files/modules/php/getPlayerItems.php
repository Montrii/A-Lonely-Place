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

        $result = mysqli_query($conn, "SELECT * FROM items WHERE id = " . intval($userInfo[0]['item1']));
        $item1 = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $result = mysqli_query($conn, "SELECT * FROM items WHERE id = " . intval($userInfo[0]['item2']));
        $item2 = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $result = mysqli_query($conn, "SELECT * FROM items WHERE id = " . intval($userInfo[0]['item3']));
        $item3 = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $result = mysqli_query($conn, "SELECT * FROM items WHERE id = " . intval($userInfo[0]['item4']));
        $item4 = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $result = mysqli_query($conn, "SELECT * FROM items WHERE id = " . intval($userInfo[0]['item5']));
        $item5 = mysqli_fetch_all($result, MYSQLI_ASSOC);



        echo $userInfo[0]['item1'] . ";" . $userInfo[0]['item2'] . ";" . $userInfo[0]['item3'] . ";" . $userInfo[0]['item4'] . ";" . $userInfo[0]['item5'] . ";";
        echo $userInfo[0]['rareity1'] . ";" . $userInfo[0]['rareity2'] . ";" . $userInfo[0]['rareity3'] . ";" . $userInfo[0]['rareity4'] . ";" . $userInfo[0]['rareity5'] . ";";
        echo $item1[0]['name'] . ";" . $item2[0]['name'] . ";" . $item3[0]['name'] . ";" . $item4[0]['name'] . ";" . $item5[0]['name'] . ";";
        echo $item1[0]['description'] . ";" . $item2[0]['description'] . ";" . $item3[0]['description'] . ";" . $item4[0]['description'] . ";" . $item5[0]['description'] . ";";
        echo $item1[0]['effect'] . ";" . $item2[0]['effect'] . ";" . $item3[0]['effect'] . ";" . $item4[0]['effect'] . ";" . $item5[0]['effect'] . ";";
    }
    mysqli_close($conn);
?>
