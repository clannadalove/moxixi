 // var ul = $(".select_list");
 // 
var ul=document.querySelector("#list");
console.log(ul);

var now = 0;
var  last = document.querySelector(".last");//上一页
var  next = document.querySelector(".next");//下一页
var  pager = document.querySelector(".items");//页码

var rows = 0;//初始化数据

$.ajax({
    url:'../api/paging.php',
    data:{

        'id':goodlist.id,
        'img':goodlist.img,
        'pri':goodlist.prices,
        'inr':goodlist.intro,
        'noun':goodlist.noun,
        'pager':1,
        'qty':34
    },
    success:function(data){
        var arr = JSON.parse(data);
        console.log(arr);
        var lli = "";
        // console.log(arr.datalist.id)
        for(var i=0;i<1;i++){
            for(var j=0;j<arr.datalist.length;j++){
                lli +=`<li class="list_shop" data-id="${arr.datalist[j].id}">
                            <div class="s_tu">
                                <a href="#">
                                    <img src="${arr.datalist[j].img}" height="158" width="158" style="vertical-align:middle;" />
                                </a>
                            </div>
                            <div class="s_price">
                                <strong>${arr.datalist[j].prices}元人民币</strong>
                                <strong style="color:#f00; line-height:16px;">/${arr.datalist[j].intro}</strong>
                            </div>
                            <div class="s_show">
                                <a href="#"  "title=${arr.datalist[j].noum}">${arr.datalist[j].noun}</a>
                            </div>
                        </li>
                        `;         
            }
            // console.log(lli);
            ul.innerHTML = lli;
        
            //创建页码
            // console.log(arr.total);
            var num=Math.ceil(arr.total/arr.qty);
            //根据数据总长度，创建页码
            rows=num;//总页数

            for(var i=0;i<num;i++){pager.innerHTML+=`<a href="#" class="item ssp">${i+1}</a>`;}
                //渲染页码
            pager.children[0].className = "item_cur";

            pager.onclick=function(ev){
                var ev = ev || window.event;
                if(ev.target.className = "ssp"){
                    now = ev.target.innerText;

                    var url = "../api/paging.php";
                    var data =`pager=${now}&qty=34`;
                    ajax("GET",url,data,function(data){
                        var arr = JSON.parse(data);
                        var str="";
                        console.log(arr);
                        // console.log(arr.datalist.id)
                        for(var i=0;i<1;i++){
                            for(var j=0;j<arr.datalist.length;j++){
                                str+=`<li class="list_shop" data-id="${arr.datalist[j].id}">
                                            <div class="s_tu">
                                                <a href="#">
                                                    <img src="${arr.datalist[j].img}" height="158" width="158" style="vertical-align:middle;" />
                                                </a>
                                            </div>
                                            <div class="s_price">
                                                <strong>${arr.datalist[j].prices}元人民币</strong>
                                                <strong style="color:#f00; line-height:16px;">/${arr.datalist[j].intro}</strong>
                                            </div>
                                            <div class="s_show">
                                                <a href="#"  "title=${arr.datalist[j].noum}">${arr.datalist[j].noun}</a>
                                            </div>
                                        </li>
                                        `;         
                            }
                        // console.log(lli);
                        ul.innerHTML = str;
                        $("#list li").click(function(){
                                var id = $(this).attr("data-id");
                                location.href = 'super_list.html?' + id;
                                });
                        // ul.html(lli);
                        }
                    })
                    for(var i=0;i<pager.children.length;i++){
                        pager.children[i].className='item';}
                    pager.children[now-1].className='item_cur';
                }
            }

            last.onclick=function(){
                now--;
                if(now<=1){
                    now=1;//最小第一页
                }
                var url = "../api/paging.php";
                var data =`pager=${now}&qty=34`;
                ajax("GET",url,data,function(data){
                  var arr = JSON.parse(data);
                  console.log(arr);
                  var str = "";
                    for(var i=0;i<1;i++){
                        for(var j=0;j<arr.datalist.length;j++){
                            str+=`<li class="list_shop" data-id="${arr.datalist[j].id}">
                                            <div class="s_tu">
                                                <a href="#">
                                                  <img src="${arr.datalist[j].img}" height="158" width="158" style="vertical-align:middle;" />
                                                </a>
                                            </div>
                                            <div class="s_price">
                                                <strong>${arr.datalist[j].prices}元人民币</strong>
                                                <strong style="color:#f00; line-height:16px;">/${arr.datalist[j].intro}</strong>
                                            </div>
                                            <div class="s_show">
                                                <a href="#"  "title=${arr.datalist[j].noum}">${arr.datalist[j].noun}</a>
                                            </div>
                                        </li>`;               
                            }
                        // console.log(str);
                        ul.innerHTML = str;
                        $("#list li").click(function(){
                                var id = $(this).attr("data-id");
                                location.href = 'super_list.html?' + id;
                                });
                        ul.html(lli);
                        }
                })
                    for(var i=0;i<pager.children.length;i++){
                        pager.children[i].className='item';}
                    pager.children[now-1].className='item_cur';
            }

            next.onclick=function(){
                now++;
                if(now>=rows){
                    now=rows;
                }    
              var url = "../api/paging.php";
              var data =`pager=${now}&qty=34`;
              ajax("GET",url,data,function(data){
                    var arr = JSON.parse(data);
                    var str = "";
                    console.log(arr);
                    for(var i=0;i<1;i++){
                        for(var j=0;j<arr.datalist.length;j++){
                            str +=`<li class="list_shop" data-id="${arr.datalist[j].id}">
                                        <div class="s_tu">
                                            <a href="#">
                                                <img src="${arr.datalist[j].img}" height="158" width="158" style="vertical-align:middle;" />
                                            </a>
                                        </div>
                                        <div class="s_price">
                                            <strong>${arr.datalist[j].prices}元人民币</strong>
                                            <strong style="color:#f00; line-height:16px;">/${arr.datalist[j].intro}</strong>
                                        </div>
                                        <div class="s_show">
                                            <a href="#"  "title=${arr.datalist[j].noum}">${arr.datalist[j].noun}</a>
                                        </div>
                                    </li>`;             
                        }
                            // console.log(lli);
                            ul.innerHTML = str;
                            $("#list li").click(function(){
                                var id = $(this).attr("data-id");
                                location.href = 'super_list.html?' + id;
                                });
                            // ul.html(lli);
                    }
             })
                for(var i=0;i<pager.children.length;i++){
                    pager.children[i].className='item';}
                pager.children[now-1].className='item_cur';
            }

            $("#list li").click(function(){
                        var id = $(this).attr("data-id");
                        location.href = 'super_list.html?' + id;
            });


                $(".asc").click(function(){
                $(".asc").addClass("upx");
                $.ajax({
                    url:'../api/Order_up.php',
                    data:{  'acc':'upx',
                            'pager':1,
                            'qty':34
                            },
                    success:function(data){
                        var arr = JSON.parse(data);
                        console.log(arr);
                        var lli = "";
                        // console.log(arr.datalist.id)
                        for(var i=0;i<1;i++){
                            for(var j=0;j<arr.datalist.length;j++){
                                lli +=`<li class="list_shop" data-id="${arr.datalist[j].id}">
                                            <div class="s_tu">
                                                <a href="#">
                                                    <img src="${arr.datalist[j].img}" height="158" width="158" style="vertical-align:middle;" />
                                                </a>
                                            </div>
                                            <div class="s_price">
                                                <strong>${arr.datalist[j].prices}元人民币</strong>
                                                <strong style="color:#f00; line-height:16px;">/${arr.datalist[j].intro}</strong>
                                            </div>
                                            <div class="s_show">
                                                <a href="#"  "title=${arr.datalist[j].noum}">${arr.datalist[j].noun}</a>
                                            </div>
                                        </li>
                                        `;         
                            }
                            // console.log(lli);
                            ul.innerHTML = lli;
                            $("#list li").click(function(){
                                var id = $(this).attr("data-id");
                                location.href = 'super_list.html?' + id;
                                });
                        }
                    }
                })
                });

                $(".dasc").click(function(){
                $(".dasc").addClass("downx");
                $.ajax({
                    url:'../api/Order_down.php',
                    data:{  'acc':'downx',
                            'pager':1,
                            'qty':34
                            },
                    success:function(data){
                        var arr = JSON.parse(data);
                        console.log(arr);
                        var lli = "";
                        // console.log(arr.datalist.id)
                        for(var i=0;i<1;i++){
                            for(var j=0;j<arr.datalist.length;j++){
                                lli +=`<li class="list_shop" data-id="${arr.datalist[j].id}">
                                            <div class="s_tu">
                                                <a href="#">
                                                    <img src="${arr.datalist[j].img}" height="158" width="158" style="vertical-align:middle;" />
                                                </a>
                                            </div>
                                            <div class="s_price">
                                                <strong>${arr.datalist[j].prices}元人民币</strong>
                                                <strong style="color:#f00; line-height:16px;">/${arr.datalist[j].intro}</strong>
                                            </div>
                                            <div class="s_show">
                                                <a href="#"  "title=${arr.datalist[j].noum}">${arr.datalist[j].noun}</a>
                                            </div>
                                        </li>
                                        `;         
                            }
                            // console.log(lli);
                            ul.innerHTML = lli;
                            $("#list li").click(function(){
                                var id = $(this).attr("data-id");
                                location.href = 'super_list.html?' + id;
                                });
                        }
                    }
                })
                });

                $(".anc").click(function(){
                $(".anc").addClass("odd");
                $.ajax({
                    url:'../api/Order_ll.php',
                    data:{  'acc':'odd',
                            'pager':1,
                            'qty':34
                            },
                    success:function(data){
                        var arr = JSON.parse(data);
                        console.log(arr);
                        var lli = "";
                        // console.log(arr.datalist.id)
                        for(var i=0;i<1;i++){
                            for(var j=0;j<arr.datalist.length;j++){
                                lli +=`<li class="list_shop" data-id="${arr.datalist[j].id}">
                                            <div class="s_tu">
                                                <a href="#">
                                                    <img src="${arr.datalist[j].img}" height="158" width="158" style="vertical-align:middle;" />
                                                </a>
                                            </div>
                                            <div class="s_price">
                                                <strong>${arr.datalist[j].prices}元人民币</strong>
                                                <strong style="color:#f00; line-height:16px;">/${arr.datalist[j].intro}</strong>
                                            </div>
                                            <div class="s_show">
                                                <a href="#"  "title=${arr.datalist[j].noum}">${arr.datalist[j].noun}</a>
                                            </div>
                                        </li>
                                        `;         
                            }
                            // console.log(lli);
                            ul.innerHTML = lli;
                            $("#list li").click(function(){
                                var id = $(this).attr("data-id");
                                location.href = 'super_list.html?' + id;
                                });
                        }
                    }
                })
                });

        }
    }           
});






 

 
 


        
                    
   