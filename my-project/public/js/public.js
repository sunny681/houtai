//根据id查找页面元素
function $id(id){
	return document.getElementById(id);
}

//获取任意区间值
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}

//随机颜色值获取
function getColor(){
	var str = "0123456789abcdef";
	var color = "";
	for( var i =1 ; i <= 4 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}

function dateToString(sign){
	//如果用户不传递任何参数  默认日期间隔符号是  - 
	/*if( !sign ){
		sign = "-";
	}*/
	sign = sign || "-";//如果sign是未定义，就按默认值 "-"
	var d = new Date();
	var y = d.getFullYear();
	var m =toTwo( d.getMonth() + 1 ) ;
	var _date =toTwo( d.getDate() );
	var h =toTwo( d.getHours() );
	var min =toTwo( d.getMinutes() );
	var s =toTwo( d.getSeconds() );
	return y + sign + m + sign + _date + " " + h + ":" + min + ":" + s;
}
//如果得到的是小于10的数 就 拼接0
function toTwo(val){
	return val < 10 ? "0" + val : val;
}

//将一个字符串转成日期
function stringToDate(str){
    return  new Date(str);
}
//时间差
function diff(start,end){
	return Math.abs( start.getTime() - end.getTime() ) / 1000;
}

//动态创建元素
function createEle(ele){
	return document.createElement(ele);
}
//获取随机n位验证码（n=length）
//	function randCode(length) {
////	    var str = Math.random().toString(36).substr(2);
////	    if (str.length>=length) {
////	        return str.substr(0, length);
////	    }
////	    str += random(length-str.length);
////	    return str;
//		var str = "abcdefg123456";
//		
//	}