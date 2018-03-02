window.onload = function(){
// 搜索
$(".button").click(function(){
    // e.stopPropagation();
    console.log($(".txt").val())
    $.ajax({
            url:"/api/ss", //后台提供的查找接口
            type:"post",
            data : {"goods_name" :$(".txt").val()},
            // dataType:'json',
            success:function(res){
              var html = `
              <tr>
              <th>
              <input type="checkbox" class="selectAll">
              <a href="#" title="点击对列表排序">编号</a>
              <!-- <img src="../img/sort_desc.gif"> -->
              </th>
              <th>
              <a href="#">商品名称</a>
              </th>
              <th>
              <a href="#" title="点击对列表排序">货号</a>
              </th>
              <th>
              <a href="#" title="点击对列表排序">价格</a>
              </th>
              <th>
              <a href="#" title="点击对列表排序">上架</a>
              </th>
              <th>
              <a href="#">精品</a>
              </th>
              <th><a href="#">新品</a></th>
              <th><a href="#">热销</a></th>
              <th><a href="#">推荐排序</a></th>
              <th><a href="#">库存</a></th>
              <th><a href="#">虚拟销量</a></th>
              <th>操作</th>
              </tr>

              `
              
              for( var i = 0 ; i < res.length ; i++ ){
                // var shop = res[i]
                html+=  `
                <tr class="b1">
                <td style="background-color: rgb(255, 255, 255);">
                <input type="checkbox" name="checkboxes[]" value="264" class="ck">
                264
                </td>
                <td class="first-cell" style="background-color: rgb(255, 255, 255);">
                <!-- <span title="点击修改内容" style="">找思路</span> -->
                <span title="点击修改内容" style="">
                ${ res[i].goods_name}
                </span>

                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <span title="点击修改内容" style="">
                <!-- E1233 -->
                ${res[i].huohao}
                </span>
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <span title="点击修改内容" style="">
                <!--    233.00 -->
                ${res[i].market_price }
                </span>
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <img src="../img/yes.gif" onclick="listTable.toggle(this, 'toggle_on_sale', 264)">
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <img src="../img/yes.gif">
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <img src="../img/yes.gif" onclick="listTable.toggle(this, 'toggle_new', 264)">
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <img src="../img/no.gif">
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <span>100</span>
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <span>1</span>
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <span>2344</span>
                </td>
                <td align="center" style="background-color: rgb(255, 255, 255);">
                <a href="#" target="_blank" title="查看">
                <img src="../img/icon_view.gif" width="21" height="21" border="0">
                </a>
                <a href="#" title="编辑">
                <img src="../img/icon_edit.gif" width="21" height="21" border="0">
                </a>
                <a href="#" title="复制">
                <img src="../img/icon_copy.gif" width="21" height="21" border="0">
                </a>
                <a href="javascript:;" title="回收站" class="del">
                <img src="../img/icon_trash.gif" width="21" height="21" border="0"></a>
                
                </td>
                </tr>
                `;


              }
              $(".tb").html( html );
            }
          });
})



// 全选
$(".selectAll").click(function(){
  $(".ck").prop("checked",$(this).prop("checked"))
})

// 删除单行
$(".tb").on("click",".del",function(e){
  if(confirm("are you 确定？")){
   e.stopPropagation();
   var e = e || event;
     var target = $(e.target)||$(e.srcElement);//查找目标元素

     target.parent().parent().parent().remove();//前端删除页面上的目标对象

       console.log( target.parent().parent().parent().find(".first-cell").children().html())//找到删除的目标对象，输出一下
       $.ajax({
            url:"/api/del", //后台提供的删除接口
            type:"post",
            data : {"goods_name" :target.parent().parent().parent().find(".first-cell").children().html()
          },
            // dataType:'json',
            success:function(res){
            	target.parent().parent().parent().remove();
            }
          });
     }
   })
}
