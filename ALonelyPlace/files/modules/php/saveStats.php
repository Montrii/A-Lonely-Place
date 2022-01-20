<?php
    $servername = "locahost";
    $database = "u867191320_ALonelyPlace";
    $user_db = "u867191320_montri";
    $password_db = "JrUtMK12.";

    $connection = new mysqli($servername, $user_db, $password_db);
    if (mysqli_connect_error()) 
    {
        echo false;
    }
    echo $_GET['ip'];
    $getUserData = "select * from inventory";
    $getUserData_result = $connection->query($getUserData);

    if($getUserData_result->num_rows > 0)
    {
        // if user is already registered in database -> pull data from db and overwrite it.
        while($row = $getUserData->fetch_assoc())
        {
            echo "id:". $row['user_id'] . " user_name: " $row['user_name'];
        }
    }
    else 
    {
        // if no entry was made in database -> new account should be created
        echo "NO USER IN DATABASE FOUND";
    }
    $getUserData->close();
?>