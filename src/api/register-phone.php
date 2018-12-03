<?php
    //登录时匹配用户名和密码
    
    header("content-type:text/html;charset=utf-8");
    include 'databank_link.php';

    $phone=$_POST['phone'];
    $psw=$_POST['psw'];
    // echo $name;
    $sql="SELECT * FROM user WHERE phone='$phone' AND `passwords`='$psw'";
    $res=$conn->query($sql);
    if($res->num_rows>0){
        echo 'yes';//用户名和密码正确
    }else{
        echo 'no';//不正确
    };
    
    //关闭结果集和数据库
    $res->close();
    $conn->close();

?>