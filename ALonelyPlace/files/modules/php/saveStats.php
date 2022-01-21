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


    $ITEM_ID = intval($_GET['item']);

    // Get Sword slot
    $sql = "SELECT * FROM items";
    $result = mysqli_query($conn, $sql);
    $item = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $matchsword = false;
    foreach($item as $key => $value)
    {
        if($item['id'] == $ITEM_ID)
        {
            $matchsword = true; 
        }
    }
    if($matchsword == false)
    {
        return echo "THIS ITEM ID DOES NOT EXIST WITHIN THE DATABASE"; 
    }
    echo "ITEM ITEGRITY VERIFIED!";
    echo print_r($item);

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