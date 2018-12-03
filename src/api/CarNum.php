<?php
    include 'databank_link.php';
    $id = isset($_GET['id']) ? $_GET['id'] : '5';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '5';
    $sql = "UPDATE car set qty='$qty' WHERE id='$id'";
    $res =$conn->query($sql);
    if($res){
        echo '成功';
    }else{
        echo '失败';
    }   
?>