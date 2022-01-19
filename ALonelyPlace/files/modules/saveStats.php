<?php
    $host = "localhost";  
    $user = "u867191320_montri";  
    $password = 'JrUtMK12.';  
    $db_name = "u867191320_ALonelyPlace";  
      
    $con = mysqli_connect($host, $user, $password, $db_name);  
    if(mysqli_connect_errno()) {  
        echo "Failed to connect with MySQL: ". mysqli_connect_error();  
    }
    else 
    {
        echo "SUCCESSFULLY LOGGED IN INTO DATABASE";
    }
?>