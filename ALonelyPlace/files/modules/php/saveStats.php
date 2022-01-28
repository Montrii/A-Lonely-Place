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
        $user = mysqli_fetch_all($result, MYSQLI_ASSOC);
        if(count($user) < 1)
        {
            echo "THIS ITEM DOES NOT EXIST IN OUR DATABASE!";
        }
        else 
        {
            echo print_r($user);
            echo "ITEM FOUND IN DATABASE!\n";
        }
        mysqli_close($conn);
    }
?>