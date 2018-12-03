<?php
    //注册时查询邮箱和手机号是否存在
    
    header("content-type:text/html;charset=utf-8");
    include 'databank_link.php';

    $email=isset($_GET['email']) ? $_GET['email'] : '';    // echo $email;
    // echo $phone;
    $sql="SELECT * FROM user WHERE email='$email'";
    $res=$conn->query($sql);
    if($res->num_rows>0){
        echo 0;//邮箱已存在，不可注册
    }else{
        echo 1;//邮箱不存在，可以注册
    }
    
    //关闭结果集和数据库
    $res->close();
    $conn->close();
?>