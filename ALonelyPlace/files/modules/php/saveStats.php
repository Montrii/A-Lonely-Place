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
        $sqlInsert = "INSERT INTO inventory (user, item1, rareity1) VALUES('" . $_GET['ip'] . "'," . $ITEM_ID . ", " . $RAREITY . ")";

        // Get Item slot
        $result = mysqli_query($conn, $sqlUser);
        $userInfo = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $item1 = intval($userInfo[0]['item1']);
        if($item1 == 0)
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
            $item2 = intval($userInfo[0]['item2']);
            $item3 = intval($userInfo[0]['item3']);
            $item4 = intval($userInfo[0]['item4']);
            if($item2 == 0)
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
            else 
            {
                $result = mysqli_query($conn, "UPDATE inventory SET item5 = " . $ITEM_ID . "rareity5 = " . $RAREITY . " WHERE user = '" . $_GET['ip'] . "'");
                echo $result;
            }
            echo "SUCCESSFULLY UPDATED USER DATA IN DATABASE!";
        }
        mysqli_close($conn);
    }
?>