<?php
    //点击注册时将新注册用户的信息添加入数据库
    header("content-type:text/html;charset=utf-8");
    include 'databank_link.php';

    $email=isset($_POST['email']) ? $_POST['email'] : '';
    $psw=isset($_POST['psw']) ? $_POST['psw'] : '';

    $sql="INSERT INTO user(email,passwords) VALUES('$email','$psw')";
    $res=$conn->query($sql);
    if($res){
        echo 'yes';//添加用户名密码成功
    }else{
        echo 'no';//失败
    }
    $conn->close();
?>