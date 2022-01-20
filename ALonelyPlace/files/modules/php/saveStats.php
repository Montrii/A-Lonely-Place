<?php
    $servername = "XX";
    $database = "XX";
    $user_db = "XX";
    $password_db = "XX";

    $conn = mysqli_connect($servername, $user_db, $password_db, $database);

    // Check Connection
    if(!$conn)
    {
        echo 'Connection error: ' . mysqli_connect_error();
    }

    // query for all inventorys
    $sql = "SELECT * FROM inventory WHERE user_name = '" . $_GET['ip'] . "'";

    // make query and get result
    $result = mysqli_query($conn, $sql);

    //fetch the resulting rows

    $inventories = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo print_r($inventories);
?>