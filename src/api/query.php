<?php
    
    header("content-type:text/html;charset=utf-8");
    include 'databank_link.php';
    
    $id = isset($_GET["id"])? $_GET["id"] : "";
    // $result = $conn->query('select * from user');
    // $res = $result->fetch_all(MYSQLI_ASSOC);
    
    // foreach($res as $item){
    //     if($item["tel"] == $tel){
    //         echo "true";
    //         break;
    //     }
    // }
    
    // $result->close();
    
    $result = $conn->query('select * from goodlist');
    $res = $result->fetch_all(MYSQLI_ASSOC);
    
        if($res["id"]==$id){
            echo json_encode($res,JSON_UNESCAPED_UNICODE);
            break;
        }
    
    $result->close();
    
    $conn->close();
    
    
    
?>