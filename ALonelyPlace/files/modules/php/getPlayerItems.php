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

        for($i = 0; $i < 5; $i++)
        {
            $result = mysqli_query($conn, "SELECT * FROM items WHERE id = " . intval($userInfo[0]['item' . $i+1]));
            $item = mysqli_fetch_all($result, MYSQLI_ASSOC);
            if(count($item) < 0)
            {
                $userInfo[0]['description'.$i+1] = $item[0]['description'];
                $userInfo[0]['effect'.$i+1] = $item[0]['effect'];
            }
        }
        echo $userInfo[0]['item1'] . ";" . $userInfo[0]['item2'] . ";" . $userInfo[0]['item3'] . ";" . $userInfo[0]['item4'] . ";" . $userInfo[0]['item5'] . ";";
        echo $userInfo[0]['rareity1'] . ";" . $userInfo[0]['rareity2'] . ";" . $userInfo[0]['rareity3'] . ";" . $userInfo[0]['rareity4'] . ";" . $userInfo[0]['rareity5'] . ";";
        echo $userInfo[0]['description1'] . ";" . $userInfo[0]['description2'] . ";" . $userInfo[0]['description3'] . ";" . $userInfo[0]['description4'] . ";" . $userInfo[0]['description5'] . ";";
        echo $userInfo[0]['effect1'] . ";" . $userInfo[0]['effect2'] . ";" . $userInfo[0]['effect3'] . ";" . $userInfo[0]['effect4'] . ";" . $userInfo[0]['effect5'];
    }
    mysqli_close($conn);
?>
