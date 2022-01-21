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
        $sql = "SELECT * FROM items WHERE id = " . $ITEM_ID;
        $result = mysqli_query($conn, $sql);
        $item = mysqli_fetch_all($result, MYSQLI_ASSOC);
        if(count($item) < 1)
        {
            echo "THIS ITEM DOES NOT EXIST IN OUR DATABASE!";
        }
        else 
        {
            echo "ITEM FOUND IN DATABASE!\n";
            $sqlUser = "SELECT * FROM inventory WHERE user = '" . $_GET['ip'] . "'";
            $result = mysqli_query($conn, $sqlUser);
            $userInfo = mysqli_fetch_all($result, MYSQLI_ASSOC);
            if(count($userInfo) < 1)
            {
                // insert new data into database
                echo "USER DATA DOES NOT EXIST\n";
                $sqlInsert = "INSERT INTO inventory (user, item1) VALUES('" . $_GET['ip'] . "'," . $ITEM_ID . ")";
                $result = mysqli_query($conn, $sqlInsert);
                echo $result;
            }
            else
            {
                // update inventory
                echo "USER DATA EXISTS - OVERWRITING\n";
            }
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