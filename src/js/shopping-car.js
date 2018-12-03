$(function() {

    /*
     需求：
        * 加数量
        * 减数量
        * 删除当行
        * 小计
        * 全选
        * 总数量和总价跟着变
    
    */

    //查询订单表的数据，渲染到购物车：建议用字符串模板
    var cart = document.querySelector('#cart');
    var arr = [];
    function car(){
        var url = '../api/car-select.php';
        ajax('GET',url,'',function(str){
            var arr = JSON.parse(str);
            console.log(arr);
            var html='';
            for(var i=0;i<arr.length;i++){
                html+=`<li class="decs" data-id = ${arr[i].id}>
                            <p class="good_check"><input type="checkbox" name="good" value=""/></p>
                            <p class="good_img"><img src="${arr[i].img}"/></p>
                            <p class="good_name">${arr[i].noun}</p>
                            <p class="good_price">￥&nbsp;${arr[i].prices}.00</p>
                            <p class="num">
                                <span class="cutnum">-</span>
                                <input class="nownum" type="text" value="${arr[i].qty}" />
                                <span class="addnum">+</span>
                            </p>
                            <p class="good_total">￥&nbsp;${arr[i].prices*arr[i].qty}.00</p>
                            <p class="good_del">
                                <a href="javascript:;" style="color:#333;">删除</a>
                            </p>
                        </li>`;
            }
            cart.innerHTML += html;
        });
    }
    car();
    //加数量:事件委托方式
    $('#cart').on('click', '.addnum', function() {

        //点击获取对应行的数量，加1在赋值
        var val = $(this).prev().val();
        var id = $(this).parent().parent().attr('data-id');
        val++;
        if (val >= 100) { //库存量
            val = 100;
        }
        //接口：更新数据库数量
        $(this).prev().val(val);
        var url = '../api/CarNum.php';
        var data = `id=${id}&qty=${val}`;
        ajax('GET',url,data,function(str){
            console.log(str);
        });
        subTotal($(this)); //刷新小计
        total();
    });

    //减去数量
    $('#cart').on('click', '.cutnum', function() {
        //点击获取对应行的数量，加1在赋值
        var val = $(this).next().val();
        var id = $(this).parent().parent().attr('data-id');
        val--;
        if (val <= 1) { //库存量
            val = 1;
        }
        //接口：更新数据库数量
        $(this).next().val(val);
        var url = '../api/CarNum.php';
        var data = `id=${id}&num=${val}`;
        ajax('GET',url,data,function(str){
            console.log(str);
        });
        subTotal($(this)); //刷新小计
        total();
    });
    function subTotal(now) { //小计
        var num = now.parent().find('input').val(); //数量
        var price = now.parent().prev().text();
        price = $.trim(price); //工具方法：去除前后空格
        price = price.substring(2);
        //      console.log(num,price);
        var all = (num * price).toFixed(2); //保留两个小数，小计：数量*单价
        now.parent().next().html('￥&nbsp;' + all);
        total();
    }

    //删除当行
    $('#cart').on('click', '.good_del', function() {
        var mes = confirm('您确定要删除该行吗？');
        if (mes) {
            $(this).parent().remove();
            var id = $(this).parent().attr('data-id');
            $.ajax({
                type:"get",
                url:"../api/delline.php",//接口路径
                async:true,//异步
                data:{//传输数据
                    'id':id
                },
                success:function(str){//成功回调
                    console.log(str);
                }
            });
            //接口：删除数据库的某行
        }
        update(); //最后一行是否显示判断
        total();
    });

    //更新状态
    function update() {
        if ($('.addnum').size() == 0) {
            //意味着没有商品数据了
            $('#del').css('display', 'none');
        }
    }

    //全选
    var isok = true;
    $('#allchecked').on('click', function() {
        if (isok) {
            //全选 attr()只能帮到普通属性  id class title ;prop()添加有行为的属性：一般用在单选和复选框
            $(this).find('input').prop('checked', 'checked');
            $('.good_check input').prop('checked', 'checked');
            total();
        } else {
            //不选
            $(this).find('input').removeAttr('checked');
            $('.good_check input').removeAttr('checked');
            $('#totalprice').html('￥0.00');
            $('#allnum').html(' 0 ');
        }
        isok = !isok;
    });
    total();
    //总计
    var Newnum = 0;
    function total() {
        
        var total = 0;
        var res = '0.00';
        var num = 0;
        for(var i=1;i < $('#cart li').length; i++){
            if($('#cart li').eq(i).find('.good_check input').prop('checked')){
                total += $.trim($('#cart li').eq(i).find('.good_total').text()).substring(2) * 1;
                var res = total.toFixed(2);
                num++;
            }
        }
        Newnum =num;
        $('#totalprice').html('￥' + res);
        $('#allnum').html(num);
    }
    $('#cart').on('click',' .good_check input',function(){
        total();
        if(Newnum==$('.good_check').size()){
            $('#allchecked input').prop('checked', 'checked');
            isok = false;
        }else{
            $('#allchecked input').removeAttr('checked');
            isok = true;
        }
    });
    //全删
    $('#delall').on('click', function() {
        //空数组：存被勾选的行的下标
        arr.length = 0;
        var le = $('.good_check input').size(); //复选框的总个数
        for(var i = 0; i < le; i++) {
            if($('.good_check input').eq(i).prop('checked')) {
                //意味着这一行被勾选
                arr.push(i);
            }
        }
        if(arr.length>0){
            var mes = confirm('您确定要删除多行吗？');
            var strId = '';
            if(mes) {
                for(var i=0;i<arr.length;i++){
                    strId += $('.good_check').eq(arr[i]).parent().attr('data-id')+',';
                }
                console.log(strId);
                strId = strId.slice(0,-1);
                $.ajax({
                    type:"get",
                    url:"../api/delline.php",//接口路径
                    async:true,//异步
                    data:{//传输数据
                        'id':strId
                    },
                    success:function(str){//成功回调
                        console.log(str);
                    }
                });
                for(var i = arr.length - 1; i >= 0; i--) { //找到对应的行，删除
                    $('.good_check').eq(arr[i]).parent().remove();
                    $('.good_check').eq(arr[i]).parent().attr('data-id');
                    //接口3：删除数据库订单表多条数据
                    
                }
            }
        }
        total();
        update();
    });
});