//============切换注册条件的页面============
        $('.free_login').click(function(){
            $(this).addClass('selected').siblings().removeClass('selected');

            $(".special").hide().eq($(this).index()).show();
        });

//================正则======================
        function ma(){
            var yanzhengma = getRandomNum(0,9999)
            if(yanzhengma < 1000){
                yanzhengma = "0" + yanzhengma;
            }
            if(yanzhengma < 100){
                yanzhengma = "0" + yanzhengma;
            }
            if(yanzhengma < 10){
                yanzhengma = "0" + yanzhengma;
            }
            return yanzhengma;
        }
        var checkReg = {
                trim:function(str){//去掉前后空格
                    var reg = /^\s+|\s+$/g;
                    return str.replace(reg,'');
                },
                tel:function(str){//号码
                    var reg = /^1[3-9]\d{9}$/;
                    return reg.test(str);
                },
                emal:function(str){//邮箱正则
                    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//网上推荐
                    return reg.test(str);
                },
                idcard:function(str){//身份证
                    var reg = /^(\d{17}|\d{14})[\dX]$/;
                    return reg.test(str);
                },
                psweasy:function(str){//6-18位首字母开头  密码
                    var reg = /^[a-zA-Z]\w{6,10}$/;
                    return reg.test(str);
                },
                pwwagain:function(str1,str2){
                    return str1 === str2;//全等 恒等    密码
                },
                urladr:function(str){
                    var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
                    return reg.test(str);
                },
                birthy:function(str){//生日
                    var reg = /^(19\d\d|200\d|201\d)[-/ ](0\d|1[0-2])[-/ ](0\d|[1-2]\d|30|31)$/;
                    return reg.test(str);
                },
                username:function(str){//登录账号
                    var reg = /^[a-zA-Z][\w\-]{5,19}$/;
                    return reg.test(str);
                },
                nickname:function(str){//昵称，账号名称
                    var reg = /^[\u2E80-\u9FFF]+$/;
                    return reg.test(str);
                }
            }
    
//==============邮箱正则====================

    $("#emailA").blur(function(){
        var email = this.value;//获取框内的内容
        var str=checkReg.trim(email);//去掉前后空格的内容
        if(str && checkReg.emal(str)){
            $.ajax({
                url:'../api/check-email.php',
                type:'GET',
                data:{'email':email},
                success:function(data){
                    if(data == "1"){
                        $('#emailA1').html("该邮箱可以注册");
                        $('#emailA1').css('color','green');
                    }else{
                        $('#emailA1').html("无用邮箱或已注册邮箱");
                        $('#emailA1').css('color','#FFCC00');  
                    }
                }
            })
                                return true;
        }else{
            $('#emailA1').html("请输入可使用的邮箱");
            $('#emailA1').css('color','red');
            this.value = "";

        }
    });

    $("#Nname").blur(function(){
        var name = this.value;//获取框内的内容
        var str=checkReg.trim(name);//去掉前后空格的内容
        if(str && checkReg.nickname(str)){
            $('#Nname1').html("昵称可以使用");
            $('#Nname1').css('color','green');
            return true;
        }else{
            $('#Nname1').html("不符合标准，请输入3~10个字符，只含有汉字");
            $('#Nname1').css('color','red');
            this.value = "";
        }
    });

    $("#PPssww").blur(function(){
        var psw = this.value;//获取框内的内容
        var str=checkReg.trim(psw);//去掉前后空格的内容
        if(str && checkReg.psweasy(str)){
            $('#PPssww1').html("密码可以使用");
            $('#PPssww1').css('color','green');
            return true;
        }else{
            $('#PPssww1').html("不符合标准，请输入6~10个字符，首字必须是字母，只能包含数字或下划线_");
            $('#PPssww1').css('color','red');
            this.value = "";
        }
    });

    $("#PPssww2").blur(function(){
        var pssw=document.getElementById('PPssww');
        var psw1 = this.value;//获取框内的内容
        var psw2 = pssw.value;
        var str1 = checkReg.trim(psw2);//去掉前后空格的内容
        var str2 = checkReg.trim(psw1);//去掉前后空格的内容
        if(str2 && checkReg.pwwagain(str1,str2)){
            $('#PPssww3').html("密码一致");
            $('#PPssww3').css('color','green');
            return true;
        }else{
            $('#PPssww3').html("两次输入的密码不一致");
            $('#PPssww3').css('color','red');
            this.value = "";
        }
    });

    var chaoYan = document.querySelector("#chaoYan");
    chaoYan.nextElementSibling.innerHTML = ma();
    $("#chaoYan").blur(function(){
        var yanzheng = this.value;
        if(yanzheng != this.nextElementSibling.innerHTML){
          this.nextElementSibling.nextElementSibling.innerHTML = "验证码不正确";
          this.nextElementSibling.nextElementSibling.style.color ="ren;"
          this.value = "";
          this.nextElementSibling.innerHTML = ma();  
        }else{
            this.nextElementSibling.nextElementSibling.innerHTML ="验证码正确";
            this.nextElementSibling.nextElementSibling.style.color ="green;"
            return true;
        }
    });

    // $("#chexXx").prop("checked","checked");
    
    $("#chexXx").click(function(){console.log($("#chexXx").prop("checked"));
            if($("#chexXx").prop("checked") == false){
               $("#zhuCC").css("background","#ccc");
            }else if($("#chexXx").prop("checked") == true){
                $("#zhuCC").css("background","#fff");
                return true; 
            }
    });

            
    $("#zhuCC").click(function(){
        if( $("#emailA").val() && 
            $("#Nname").val() && 
            $("#PPssww").val() && 
            $("#PPssww2").val() && 
            $("#chaoYan").val() && 
            $("#chexXx").prop("checked")){
            $.ajax({
                url: '../api/isset-email.php',
                type:'POST',
                data:{
                    'email':$("#emailA").val(),
                    'psw':$("#PPssww").val()
                },
                success:function(data){
                    if(data == "yes"){
                        alert("注册成功,请继续登录");
                        window.location.reload();
                    }else{
                        alert("注册失败");
                    }
                }
            })
        }

    });
//==============手机正则====================
  
    $("#phonEE").blur(function(){
        var phone = this.value;//获取框内的内容
        var str=checkReg.trim(phone);//去掉前后空格的内容
        if(str && checkReg.tel(str)){
            $.ajax({
                url:'../api/check-phone.php',
                type:'GET',
                data:{'phone':phone},
                success:function(data){
                    if(data){
                        $('#phonEE1').html("该手机号可以注册");

                        $('#phonEE1').css('color','green');
                    }else{
                        $('#phonEE1').html("无用手机号或已注册手机号");
                        $('#phonEE1').css('color','#FFCC00');  
                    }
                }
            })
            return true;
        }else{
            $('#phonEE1').html("请输入可使用的手机号");
            $('#phonEE1').css('color','red');
            this.value = "";
        }
    });

    $("#PsPs").blur(function(){
        var psw = this.value;//获取框内的内容
        var str=checkReg.trim(psw);//去掉前后空格的内容
        if(str && checkReg.psweasy(str)){
            $('#PsPs1').html("密码可以使用");
            $('#PsPs1').css('color','green');
            return true;
        }else{
            $('#PsPs1').html("不符合标准，请输入6~10个字符，首字必须是字母，只能包含数字或下划线_");
            $('#PsPs1').css('color','red');
            this.value = "";
        }
    });

    $("#Pwss").blur(function(){
        var pssw=document.getElementById('PsPs');
        var psw1 = this.value;//获取框内的内容
        var psw2 = pssw.value;
        var str1 = checkReg.trim(psw2);//去掉前后空格的内容
        var str2 = checkReg.trim(psw1);//去掉前后空格的内容
        if(str2 && checkReg.pwwagain(str1,str2)){
            $('#Pwss1').html("密码一致");
            $('#Pwss1').css('color','green');
            return true;
        }else{
            $('#Pwss1').html("两次输入的密码不一致");
            $('#Pwss1').css('color','red');
            this.value = "";
        }
    });

    var chYan = document.querySelector("#chYan");
    chYan.nextElementSibling.innerHTML = ma();
    $("#chYan").blur(function(){
        var yanzheng = this.value;
        if(yanzheng != this.nextElementSibling.innerHTML){
          this.nextElementSibling.nextElementSibling.innerHTML = "验证码不正确";
          this.nextElementSibling.nextElementSibling.style.color ="red";
          this.value = "";
           this.nextElementSibling.innerHTML = ma(); 
        }else{
            this.nextElementSibling.nextElementSibling.innerHTML ="验证码正确";
            this.nextElementSibling.nextElementSibling.style.color ="green";
            return true;
        }
    });

    var chaoYuan = document.querySelector("#chaoYuan");
    chaoYuan.nextElementSibling.onclick = function(ev){
        this.value = ma();
    }

    $("#chaoYuan").blur(function(){
        var yanzheng = this.value;
        if(yanzheng != this.nextElementSibling.value){
          this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "验证码不正确";
          this.nextElementSibling.nextElementSibling.nextElementSibling.style.color ="red";
          this.value = "";
        }else{
            this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML ="验证码正确";
            this.nextElementSibling.nextElementSibling.nextElementSibling.style.color ="green";
            return true;
        }
    });

    $("#cheCcC").click(function(){console.log($("#cheCcC").prop("checked"));
            if($("#cheCcC").prop("checked") == false){
               $("#zhuCHH").css("background","#ccc");
            }else if($("#cheCcC").prop("checked") == true){
                $("#zhuCHH").css("background","#fff");
                return true; 
            }
    });

    $("#zhuCHH").click(function(){
        if( $("#phonEE").val() && 
            $("#PsPs").val() && 
            $("#Pwss").val() && 
            $("#chYan").val() && 
            $("#chaoYuan").val() && 
            $("#cheCcC").prop("checked")){
            $.ajax({
                url: '../api/isset-phone.php',
                type:'POST',
                data:{
                    'phone':$("#phonEE").val(),
                    'psw':$("#PsPs").val()
                },
                success:function(data){
                    if(data == "yes"){
                        alert("注册成功,请继续登录");
                        window.location.reload();
                    }else{
                        alert("注册失败");
                    }
                }
            })
        }

    });


//=================登录=====================
 var suhao ="";

$d = new Date();
   $("#su_link").click(function(){
     var suhao =$('#su_hao').val();
        event.preventDefault();
        $.ajax({
            url:'../api/login_reg.php',
            type:'POST',
            data:{
                  'one':suhao,
                  'psw':$('#su_mi').val()
            },
            success:function(data){
                if(data){
                    alert('欢迎来到摩西日本代购网');
                    Cookie.set('name',suhao,{'path':'/src'});
                    location.href = '../moxi.html';
                }else{
                    alert('用户名或者密码错误');
                }
            }
        })
   }); 