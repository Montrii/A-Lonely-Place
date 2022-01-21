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


    $SWORD_ID = intval($_GET['sword']);

    // Get Sword slot
    $sql = "SELECT * FROM items";
    $result = mysqli_query($conn, $sql);
    $sword = mysqli_fetch_all($result, MYSQLI_ASSOC);
    foreach ($sword as $key => $value)
    {
        if($sword['id'] == $SWORD_ID)
        {
            echo "found matching sword!";
        }
    }
    echo print_r($sword);

    /*
    // SAVING DATA INTO INVENTORY TABLE
    // query for all inventorys
    $sql = "SELECT * FROM inventory WHERE user_name = '" . $_GET['ip'] . "'";

    // make query and get result
    $result = mysqli_query($conn, $sql);

    //fetch the resulting rows

    $inventories = mysqli_fetch_all($result, MYSQLI_ASSOC);
    if(count($inventories) > 0)
    {
        echo print_r($inventories[0]) . print_r($_GET);
    }
    */
?>