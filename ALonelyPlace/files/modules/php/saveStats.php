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
        $ITEM_ID = intval($_GET['item']);
        $MATCH_ITEM = false;

        // Get Sword slot
        $sql = "SELECT * FROM items";
        $result = mysqli_query($conn, $sql);
        $item = mysqli_fetch_all($result, MYSQLI_ASSOC);
        for($i = 0; $i < count($item); $i++)
        {
            if($item[$i]['id'] == $ITEM_ID)
            {
                $MATCH_ITEM = true;
            }
            echo $item[$i];
        }
        if($MATCH_ITEM == false)
        {
            echo "THIS ITEM ID DOES NOT EXIST WITHIN THE DATABASE"; 
        }
        else 
        {
            echo "ITEM ITEGRITY VERIFIED!";
            echo $item[$ITEM_ID]['name'];
        }
    }



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