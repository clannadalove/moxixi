<?php

   include 'databank_link.php';

    $id=isset($_GET['id']) ? $_GET['id'] : '1';
    $sql="DELETE FROM car WHERE id in($id)";

    $res=$conn->query($sql);

    if($res){
        echo 'yes';
    }
    $conn->close();

?>