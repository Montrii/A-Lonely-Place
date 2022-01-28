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
        $RAREITY = intval($_GET['rareity']);
        $sqlUser = "SELECT * FROM inventory WHERE user = '" . $_GET['ip'] . "'";

        // Get Item slot
        $result = mysqli_query($conn, $sqlUser);
        $userInfo = mysqli_fetch_all($result, MYSQLI_ASSOC);
        // update inventory
        echo "USER DATA EXISTS - OVERWRITING\n";
        $item1 = intval($userInfo[0]['item1']);
        $item2 = intval($userInfo[0]['item2']);
        $item3 = intval($userInfo[0]['item3']);
        $item4 = intval($userInfo[0]['item4']);
        $item5 = intval($userInfo[0]['item5']);
        if($item1 == 0)
        {
            $result = mysqli_query($conn, "UPDATE inventory SET item1 = " . $ITEM_ID . "rareity1 = " . $RAREITY . " WHERE user = '" . $_GET['ip'] . "'");
            echo $result;
        }
        else if($item2 == 0)
        {
            $result = mysqli_query($conn, "UPDATE inventory SET item2 = " . $ITEM_ID . "rareity2 = " . $RAREITY . " WHERE user = '" . $_GET['ip'] . "'");
            echo $result;
        }
        else if($item3 == 0)
        {
            $result = mysqli_query($conn, "UPDATE inventory SET item3 = " . $ITEM_ID . "rareity3 = " . $RAREITY . " WHERE user = '" . $_GET['ip'] . "'");
            echo $result;
        }
        else if($item4 == 0)
        {
            $result = mysqli_query($conn, "UPDATE inventory SET item4 = " . $ITEM_ID . "rareity4 = " . $RAREITY . " WHERE user = '" . $_GET['ip'] . "'");
            echo $result;
        }
        else if($item5 == 0)
        {
            $result = mysqli_query($conn, "UPDATE inventory SET item5 = " . $ITEM_ID . "rareity5 = " . $RAREITY . " WHERE user = '" . $_GET['ip'] . "'");
            echo $result;
        }
        else
        {
            echo "UNABLE TO WRITE INTO FILE AS INVENTORY IS FULL";
        }
        echo "SUCCESSFULLY UPDATED USER DATA IN DATABASE!";
        mysqli_close($conn);
    }
?>