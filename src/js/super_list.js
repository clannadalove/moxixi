var id = decodeURI(location.search).slice(1);
var main = document.querySelector(".z_sbox");
var content = "";
console.log(id);
$.ajax({
    type:"GET",
    url:'../api/list-up.php',
    data:{'id':id},
    success:function(data){
        var arr = JSON.parse(data);
        console.log(arr);
         content += `<div class="sbox_l">
                            <div class="icon" style="position:absolute;top:0;left:0;z-index:1;">299 <br/>包邮</div>
                            <div id="MagnifierWrap2">
                                    <div class="MagnifierMain">
                                    </div>
                                        <span class="spe_leftBtn">&lt;</span>
                                        <span class="spe_rightBtn">&gt;</span>
                                        <div class="spec-items">
                                        <ul>
                                        </ul>
                                    </div>
                            </div>
                      </div> 
                    <div class="sbox_c" id="xbox">
                        <dl>
                            <dt>
                                <h1>
                                    ${arr[0].noun}
                                </h1>
                            </dt>
                            <dd class="c_price">
                                <ul>
                                    <li style="color:#4c4c4c; letter-spacing:1px;">
                                        价格:¥<span style="color: #f86f76; font-size: 26px;font-weight: bold;">${arr[0].prices}</span>
                                    </li>
                                    <li>
                                        市场价：<span style="text-decoration: line-through; font-size: 14px;">
                                        ¥${arr[0].pricesd}</span>
                                    </li>
                                </ul>
                            </dd>
                            <dd class="c_place">
                                <ul>
                                    <li style="width: 33%; display:inline-block; color:#4c4c4c;">品牌：佑天兰/UTENA</li>
                                    <li style="width: 35%; display:inline-block; color:#4c4c4c;">产地：日本</li>
                                    <li style="width: 27%; display:inline-block; color:#4c4c4c;">所属国：日本</li>
                                </ul>
                            </dd>
                            <dd class="c_dd">
                                <div class="c_dt">
                                    编&nbsp;&nbsp;号：
                                </div>
                                59632(636186180465610635)
                            </dd>
                            <dd class="c_dd">
                                <div class="c_dt">
                                  库&nbsp;&nbsp;存  
                                </div>
                                <div>
                                    剩余<span style="color:#e42626; font-size:14px; margin-left:1px; margin-right:1px;">${arr[0].prices}</span>
                                    件
                                </div>
                                <div style="margin:12px 0 0 64px;"><span class="cp_btn">
                                    日本发货
                                    <b class=" cp_red"></b>                                
                                </span>
                                <span class="cp_btn">
                                    上海发货
                                    <b class=" cp_red"></b>
                                </span>
                                <span class="cp_btn">
                                    大阪发货
                                    <b class=" cp_red"></b>
                                </span>
                                </div>
                                
                            </dd>
                            <dd class="c_list">
                                <div class="c_dt">
                                    配送信息：
                                </div>
                                <span class="cp_btn">
                                    海外直邮
                                    <b class=" cp_red"></b>
                                </span>
                                <span class="cp_btn">
                                    经济航空运
                                    <b class=" cp_red"></b>
                                </span>
                                <span class="cp_btn">
                                    海运
                                    <b class=" cp_red"></b>
                                </span>
                                <span class="cp_btn">
                                    特惠直邮
                                    <b class=" cp_red"></b>
                                </span>
                            </dd>
                            <dd></dd>
                            <dd class="c_dd">
                                <div class="c_dt">
                                    颜&nbsp;&nbsp;色
                                </div>
                                <span class="cp_btn">
                                    红色
                                    <b class=" cp_red"></b>
                                </span>
                                <span class="cp_btn">
                                    蓝色
                                    <b class=" cp_red"></b>
                                </span>
                                <span class="cp_btn">
                                    金色
                                    <b class=" cp_red"></b>
                                </span>
                            </dd>
                            <dd class="c_dd">
                                <div class="c_dt" style="margin-top:12px;">
                                    数量信息：
                                </div>
                                <div class="c_dt" style="width:129px;">
                                    <a href="javascript:;" class="ca_btn" id="jian"></a>
                                    <input type="text" class="c_txt" value="1" />
                                    <a href="javascript:;" class="ca_btn" id="add" style="background-position: -82px 0px;"></a>
                                </div>
                            </dd>
                            <dd class="c_dd">
                                <div class="c_dt">
                                    销&nbsp;量：
                                </div>
                                ${arr[0].pricesd}
                            </dd>
                            <dd class="c_dd c_btn">
                                <div class="c_dd">
                                    <a href="javascript:;" class="ca_car">
                                        <img src="../images/r20c20.png" style="vertical-align:middle;" />
                                        加入购物车
                                    </a>
                                    <a href="../html/shopping-car.html" class="ca_buy">
                                        立刻购买
                                    </a>
                                </div>
                            </dd>
                            <dd class="c_warp">
                                <div class="c_w">
                                    <a href="javascript:;" class="ca_w" style="background-position:0 0;">赞(0)</a>
                                    <a href="javascript:;" class="ca_w" style="background-position:0 0;">加入收藏</a>
                                    <a href="javascript:;" class="ca_w ca_w1" style="background-position:-205px 0">优惠活动
                                        <div class="ca_erw">
                                            <div style="line-height:18px;">
                                                打开微信扫描二维码关注摩西，及时掌握最新优惠信息，还支持微信下单哦！
                                            </div>
                                            <img src="../images/r30c30.jpg" height="200" width="200"/>
                                            <div>
                                                摩西官方微信：moximoxishopping
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div class="sbox_r">
                        <img src="../images/r66c66.png" height="588" width="250" alt="" />
                    </div>`;
                    // console.log(content);
                    // console.log(main);
        main.innerHTML = content;


            
            //数组假数据，换成你们数据库查询的数据即可
            var arrSmall =[arr[0].imgurl1, arr[0].imgurl2, arr[0].imgurl3, arr[0].imgurl4];
            var arrBig = [arr[0].imgurl1, arr[0].imgurl2, arr[0].imgurl3, arr[0].imgurl4];
            
            //渲染数据  
            var html='';
            for(var i=0;i<arrSmall.length;i++){
                html+=`<li><img src="${arrSmall[i]}" data-lsrc="${arrSmall[i]}" data-maxSrc="${arrBig[i]}"></li>`;
            }
            console.log(html);
            $('#MagnifierWrap2 .spec-items ul').html(html);//生成节点
            $('#MagnifierWrap2 .spec-items ul li').eq(0).addClass('on');//第一个li样式为on
            
            //第一个大图的渲染
            var str=`<img class="MagTargetImg" src="${arrSmall[0]}" data-src="${arrBig[0]}">`;
            $('#MagnifierWrap2 .MagnifierMain').html(str);
            
            //调用放大镜插件：传最大盒子id即可
            MagnifierF("MagnifierWrap2");
    }
});


    $(".z_sbox").on('click','#jian',function(){    
        var n=$(this).next().val();
        --n;
        if(n<1){n=1;}
        $(this).next().val(n);

    });
    $(".z_sbox").on('click','#add',function(){
        console.log(123);
           var n=$(this).prev().val();
           ++n;
           $(this).prev().val(n);
    });



    $(".z_sbox").on('click','.ca_car',function(){
        $.ajax({
                type:"get",
                url:"../api/setCar.php",
                data:{
                    'id':id,
                    'qty':$(".c_txt").val()
                },
                success:function(){
                    alert("添加成功");
                }
            });
    });


    
   $(".z_sbox").on('click','.cp_btn',function(){
         $(this).addClass('Bred');
         $(this).siblings().removeClass('Bred');
        // $(this).css("border", "1px solid #f86f76");
        $(this).find($('.cp_red')).css("display","block");
        $(this).siblings().find($('.cp_red')).css("display","none");
   })


   $('.hucc').click(function(){
            $(this).addClass('hyb_active');
            $(this).siblings().removeClass('hyb_active');
            $(".fucc").hide().eq($(this).index()).show();
        });