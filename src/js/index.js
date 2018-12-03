//           
//===============================轮播图===============================
$(function(){
    
    /*
        步骤：一定要掌握的版本
            1.把所有的图片放在右侧，第一个图片放到可视区
            2.开定时器：每次轮播一个图
            3.焦点跟随
            4.点击上下按钮可以切图
            5.点击焦点可以跳转
    
     */
    
    //1.把所有的图片放在右侧，第一个图片放到可视区
    //获取图片宽度
    var iW=$('#imglist li').eq(0).outerWidth();//JS offsetwidth
    
    //6.背景颜色跟随图片变化
        var color = new Array(4);
            color[0] = "rgb(255, 199, 44)";
            color[1] = "rgb(255, 229, 230)";
            color[2] = "rgb(223, 223, 223)";
            color[3] = "rgb(252, 236, 218)";
    
    $('#imglist li').css('left',iW);
    $('#imglist li').eq(0).css('left',0);
    
    
    //2.开定时器：每次轮播一个图
    var timer=null;
    clearInterval(timer);
    var now=0;
    
    timer=setInterval(next,8000);//每隔2秒钟切换一个图
    
    function next(){
        //旧的挪走
        $('#imglist li').eq(now).stop().animate({'left':-iW},1000);

        now=++now>=$('#imglist li').size()?0:now;
        //新的快速放在右侧，再挪进可视区
        $('#imglist li').eq(now).css('left',iW);
        $('#imglist li').eq(now).stop().animate({'left':0},1000);
        light();
    }
    
    //3.焦点跟随
    function light(){
        $('#light span').removeClass('active');
        $('#light span').eq(now).addClass('active');
        $('#nav').css("background-color",color[now]);
    }
    
    function prev(){
        //从左侧切入到可视区
        //旧的挪到右侧
        $('#imglist li').eq(now).stop().animate({'left':iW},1000);
        //新的
        now=--now<0?$('#imglist li').size()-1:now;
        $('#imglist li').eq(now).css('left',-iW);
        $('#imglist li').eq(now).stop().animate({'left':0},1000);
        light();
    }
    
    //4.点击上下按钮可以切图:如果是渲染出来的数据，记得用事件委托来绑定
    
    //鼠标经过停止，鼠标离开继续运动
    $('#box').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer=setInterval(next,2000);
    });
    
    //点击切换到上一张
    $('#prev').click(function(){
        prev();
    });
    
    //点击切换到下一张
    $('#next').click(function(){
        //下一张
        next();
    });
    $('#imglist').mouseover(function() {
        $('#posibtn p').css('display','block');
    });
    
    //5.点击焦点可以跳转
    
    $('#light span').mouseover(function(){
        //旧 ：now
        //新：index() 新的
        var index=$(this).index();
        if(index>now){
            //从右边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).animate({'left':-iW},1000);
            //新的
            $('#imglist li').eq(index).css('left',iW);
            $('#imglist li').eq(index).animate({'left':0},1000);
            now=index;//最新的一张变成index
            
        }
        if(index<now){
            //从左边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).animate({'left':iW},1000);
            //新的
            $('#imglist li').eq(index).css('left',-iW);
            $('#imglist li').eq(index).animate({'left':0},1000);
            now=index;//最新的一张变成index
        }
        
        light();
    });
        


});
//=========================================================================
    //显示隐藏下拉菜单
$('.rr').mouseover(function(){
            $(".shopinAllone").hide().eq($(this).index()).show();
        });
$('.rr').mouseout(function(){
            $(".shopinAllone").hide().eq($(this).index());
        });


//=========================复用性轮播图======================== 
function sliderImg(id, special) {
    
    var slideimg = getid(id); //最大盒子
    var ul = slideimg.children[0].children[0];
    var alis = ul.children;
    var iW = alis[0].offsetWidth; //获取一个图片的宽度
    var num = 0; //可视区内图片下标，当前的那张
    var light = slideimg.children[1];
    var aspan = light.children; //焦点
    var pis = slideimg.children[2];
    //  console.log(aspan.length);

    //1.图片都在右侧
    for(var i = 0; i < alis.length; i++) {
        alis[i].style.left = iW + 'px';
    }

    //2.第一个图放到可视区
    alis[0].style.left = 0;

    //3、不断的轮下一张，开定时器：旧图挪走，新图进入可视区
    var timer = null;
    clearInterval(timer);
    timer = setInterval(next, 2000); //每隔2秒切一张图

    function next() { //切一个图片
        //旧图挪走 num=0
        startMove(alis[num], {
            'left': -iW
        });

        //新图进入可视区  num=1,先把新图放在右侧，再挪进来
        //      num++;
        num = ++num >= alis.length ? 0 : num;
        alis[num].style.left = iW + 'px';
        startMove(alis[num], {
            'left': 0
        }); //挪到可视区

        spanAvtive();

    }

    function prev() {
        //旧图挪到右侧 num 0
        startMove(alis[num], {
            'left': iW
        });
        //新图快速放到左侧，再挪进可视区
        //      num--; //num 5
        num = --num < 0 ? alis.length - 1 : num;
        alis[num].style.left = -iW + 'px';
        startMove(alis[num], {
            'left': 0
        }); //可视区
        spanAvtive(); //焦点跟随
    }

    //4、鼠标经过停止，鼠标离开继续轮播
    slideimg.onmouseenter = function() {
        clearInterval(timer); //鼠标经过清除定时器
    }

    slideimg.onmouseleave = function() {
        clearInterval(timer); //放在定时器叠加
        timer = setInterval(next, 2000);
    }
    //6、焦点跟随，点击焦点可以切到对应的图片
    function spanAvtive() {
        for(var i = 0; i < aspan.length; i++) {
            aspan[i].className = '';
        }
        aspan[num].className = special;
    }
    //点击焦点可以切到对应的图片
    for(var i = 0; i < aspan.length; i++) {
        aspan[i].index = i;
        aspan[i].onmouseover = function() {
            //给每一个焦点绑定点击事件
            var index = this.index;

            //判断方向
            if(index > num) {
                //从右边切到可视区
                //旧图 num 挪到左边
                startMove(alis[num], {
                    'left': -iW
                });
                //新图 index 先放在右侧，再挪进可视区
                alis[index].style.left = iW + 'px';
                startMove(alis[index], {
                    'left': 0
                });
                num = index;
                spanAvtive();
            }
            if(index < num) {
                //从左边切入
                //旧图挪到右侧
                startMove(alis[num], {
                    'left': iW
                });
                //新的快速放左边，再进入可视区  index
                alis[index].style.left = -iW + 'px';
                startMove(alis[index], {
                    'left': 0
                });
                num = index;
                spanAvtive();
            }
        }
    }
}
//=========================tab标签切换==========
        $('.inp').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(".f_onmain_02_l").hide().eq($(this).index()).show();
        });
        $('.inp1').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(".f_onmain_02_ll").hide().eq($(this).index()).show();
        });
//=========================跳楼机===============================
//思路：1.这里要用到点击事件，因为点击处可能数量较多，因此最好用事件代理来处理，可以提高性能。
// 2.当点击一个按钮时，能够获取到与他相对应的元素的ID。

// 3.通过jquery的offset方法返回top和left两个属性后获取他的top属性。

// 4.用animate方法改变html的scrollTop属性，值为上面的top属性值。
        $('#machine').on('click','a',function(e){
            var target = e.target;
            var id = $(target).data("to");
            $('html,body').animate({scrollTop:$('#'+id).offset().top}, 200);

        });
//=============================回到顶部================
$(function(){

         $('#machine').hide();        //隐藏 top按钮
 
         $(window).scroll(function(){
 
             //当window的scrolltop距离大于1时， 
             if($(this).scrollTop() > 100){
                 $('#machine').fadeIn();
             }else{
                 $('#machine').fadeOut();
             }
         });
 
         $('#upupx').click(function(){
             $('html ,body').animate({scrollTop: 0}, 300);
             return false;
         }); 
     });
//====================右侧隐藏侧栏================
     $(document).ready(function(){
        $("#hide_left").mouseover(function (){  
            $("#hide_right").show();  
        }).mouseout(function (){  
            $("#hide_right").hide();  
        }); 
 })
//=======右侧隐藏栏你有一大堆的隐藏元素呢======     
        $(".list_00").mouseover(function (){  
            $(".order1").show();  
        }).mouseout(function (){  
            $("order1").hide();  
        });

        $(".list_01").mouseover(function (){  
            $(".userlogin").show();  
        }).mouseout(function (){  
            $("#userlogin").hide();  
        });

        $(".list_07").mouseover(function (){  
            $(".dod").show();  
        }).mouseout(function (){  
            $(".dod").hide();  
        });
