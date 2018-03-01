window.onload = function(){
//点击弹出新的ul
	// $(".collapse1").click(function(e){
	// 	var e = e || event;
	// 	e.stopPropagation();
	// })

	$(".collapse1 .oUl").css("display","none")
	$("li").click(function(){
		if( $(this).children("ul").css("display") == "none"	){
			$(".collapse1").css("background"," #575757 url(img/menu1_1.png) 9px 0 no-repeat");
			$(".collapse1 .oUl").css("display","block");
			

		}else{
			$(".collapse1").css("background"," #575757 url(img/menu_1.png) 9px 0 no-repeat");
			$(".collapse1 .oUl").css("display","none");

		}


	})


	$(".collapse2 ul").css("display","none")
	$(".collapse2:has(ul)").click(function(){
		if( $(this).children("ul").css("display") == "none"	){
			$(".collapse2").css("background"," #575757 url(img/menu_2.png) 9px 0 no-repeat");
			$(".collapse2 ul").css("display","block");

		}else{
			
			$(".collapse2 ul").css("display","none");
		}


	})

	$(".collapse3 ul").css("display","none")
	$(".collapse3:has(ul)").click(function(){
		if( $(this).children("ul").css("display") == "none"	){
			$(".collapse3").css("background"," #575757 url(img/menu_3.png) 9px 0 no-repeat");
			$(".collapse3 ul").css("display","block");

		}else{
			
			$(".collapse3 ul").css("display","none");
		}


	})

	$(".collapse4 ul").css("display","none")
	$(".collapse4:has(ul)").click(function(){
		if( $(this).children("ul").css("display") == "none"	){
			$(".collapse4").css("background"," #575757 url(img/menu_4.png) 9px 0 no-repeat");
			$(".collapse4 ul").css("display","block");

		}else{
			
			$(".collapse4 ul").css("display","none");
		}


	})

	$(".collapse5 ul").css("display","none")
	$(".collapse5:has(ul)").click(function(){
		if( $(this).children("ul").css("display") == "none"	){
			$(".collapse5").css("background"," #575757 url(img/menu_5.png) 9px 0 no-repeat");
			$(".collapse5 ul").css("display","block");

		}else{
			
			$(".collapse5 ul").css("display","none");
		}


	})

	$(".collapse6 ul").css("display","none")
	$(".collapse6:has(ul)").click(function(){
		if( $(this).children("ul").css("display") == "none"	){
			$(".collapse6").css("background"," #575757 url(img/menu_6.png) 9px 0 no-repeat");
			$(".collapse6 ul").css("display","block");

		}else{
			
			$(".collapse6 ul").css("display","none");
		}


	})





}