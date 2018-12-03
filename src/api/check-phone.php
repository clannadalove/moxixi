<?php
    //注册时查询邮箱和手机号是否存在
    
    header("content-type:text/html;charset=utf-8");
    include 'databank_link.php';

    $phone=isset($_GET['phone']) ? $_GET['phone'] : '';   // echo $email;
    // echo $phone;
    $sql="SELECT * FROM user WHERE phone='$phone'";
    $res=$conn->query($sql);
    if($res->num_rows>0){
        echo 0;//手机号已存在，不可注册
    }else{
        echo 1;//手机号不存在，可以注册
    }
    
    //关闭结果集和数据库
    $res->close();
    $conn->close();
?>


