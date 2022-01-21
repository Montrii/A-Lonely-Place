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
        // VARIABLES & SQL STATEMENTS
        $ITEM_ID = intval($_GET['item']);
        $MATCH_ITEM = false;
        $sql = "SELECT * FROM items WHERE id = " . $ITEM_ID;
        $sqlUser = "SELECT * FROM inventory WHERE user = '" . $_GET['ip'] . "'";
        $sqlInsert = "INSERT INTO inventory (user, item1) VALUES('" . $_GET['ip'] . "'," . $ITEM_ID . ")";

        // Get Item slot
        $result = mysqli_query($conn, $sql);
        $item = mysqli_fetch_all($result, MYSQLI_ASSOC);
        if(count($item) < 1)
        {
            echo "THIS ITEM DOES NOT EXIST IN OUR DATABASE!";
        }
        else 
        {
            echo "ITEM FOUND IN DATABASE!\n";

            $result = mysqli_query($conn, $sqlUser);
            $userInfo = mysqli_fetch_all($result, MYSQLI_ASSOC);
            if(count($userInfo) < 1)
            {
                // insert new data into database
                echo "USER DATA DOES NOT EXIST\n";
                $result = mysqli_query($conn, $sqlInsert);
                echo "SUCCESSFULLY WRITTEN DATA INTO DATABASE!\n";
            }
            else
            {
                // update inventory
                echo "USER DATA EXISTS - OVERWRITING\n";
                echo print_r($userInfo);
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