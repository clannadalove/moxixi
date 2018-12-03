<?php

    header("content-type:text/html;charset=utf-8");
    include 'databank_link.php';

    // $result = $conn->query('select * from goodlist WHERE id="1"');
    // $res = $result->fetch_all(MYSQLI_ASSOC);
    
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
    
    // $result->close();
    // $conn->close();
    $id=$_GET['id'];

    $sql="SELECT * FROM goodlist WHERE id='$id'";

    $res=$conn->query($sql);

    $data=$res->fetch_all(MYSQLI_ASSOC);
    // var_dump($data);

    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
    $res->close();
    
    $conn->close();
?>    