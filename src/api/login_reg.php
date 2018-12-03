<?php
    //登录时匹配用户名和密码
    
    header("content-type:text/html;charset=utf-8");
    include 'databank_link.php';

    $one=isset($_POST['one']) ? $_POST['one'] : '1';
    $psw=isset($_POST['psw']) ? $_POST['psw'] : '1';
    // echo $name;
    $sql="SELECT * FROM user WHERE (email='$one' or phone='$one') and passwords='#psw'";
    
    $res=$conn->query($sql);
    if($res->num_rows>0){
        echo '1';//用户名和密码正确
    }else{
        echo '0';//不正确
    };
    //关闭结果集和数据库
    $res->close();
    $conn->close();

?>