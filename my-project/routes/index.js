var express = require('express');
var router = express.Router();
var md5 = require("md5");
var UserModel = require("../model/usermodel");
var multiparty = require('multiparty');
var GoodsModel = require("../model/GoodsModel.js");






/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login', { title: '登录页面' });
});

router.get('/index', function(req, res, next) {
	res.render('index', {});
});
router.get('/error', function(req, res, next) {
	res.render('error', {});
});
router.get('/menu', function(req, res, next) {
	res.render('menu', {});
});
router.get('/line', function(req, res, next) {
	res.render('line', {});
});
router.get('/add', function(req, res, next) {
	// 检查用户是否登录
// if(req.session && req.session.usename != null){
	res.render('add', {});
/*}else{
	// 重定向
	res.redirect('/login');
}*/


});

	// 删除
	router.post("/api/del",function(req,res){
		req.body.goods_name = req.body.goods_name.trim();//数据显示”     123    “导致无法删除数据库只能删除页面，去一下空格，此为去除空白的方法
		// console.log(req.body.goods_name)
		GoodsModel.remove( { goods_name : req.body.goods_name },function(err,docs){
			res.send(docs)
		})
	})
	// 搜索
	router.post("/api/ss",function(req,res){

		GoodsModel.find( { goods_name :{$regex: req.body.goods_name} },function(err,docs){
			res.send(docs)

			// 

		})
	})

// 商品列表
/*router.get('/goods', function(req, res){
	GoodsModel.find({}, function(err, docs) {
		res.render("goods", {list: docs});
	})*/
	router.get('/goods', function(req, res,next){
		var pages = req.query.pages;
		var pageNo = parseInt(req.query.pageNo || 1);
		var count  = parseInt( req.query.count || 5);
		// .skip()--略过多少条
		var query = GoodsModel.find({}).skip((pageNo-1)*count).limit(count).sort({date:-1});
		query.exec(function(err,results){
			console.log(err)//看看有没有err是否出错
			res.render('goods',{list:results,pageNo:pageNo,count:count});
		})
/*	GoodsModel.find({}, function(err, results) {
		res.render("goods", {list: results});
	})*/
})

// 分页



// 添加
router.post("/api/add", function(req, res){
	var Form = new multiparty.Form({
		uploadDir: "./public/img"  //图片上传的路径
	})


// 保存商品
Form.parse(req, function(err, body, files){
	var goods_name = body.goods_name[0];
	var huohao = body.huohao;
	var market_price = body.market_price[0];
		// var detail = body.detail[0];
		var goods_img = files.goods_img[0].path;
		goods_img = goods_img.substr(goods_img.lastIndexOf("\\") + 1);

		var gm = new GoodsModel();
		gm.goods_name = goods_name;
		gm.huohao = huohao;
		gm.market_price= market_price;
		// gm.detail = detail;
		gm.goods_img = goods_img;
		gm.save(function(err){
			if(!err) {
				res.send("商品保存成功");
			} else {
				res.send("商品保存失败");
			}
		})
	})
})


router.post("/api/login",function(req,res){
// console.log(req);
var username = req.body.username;
var psw = req.body.psw;
//console.log(username, psw);  --查看一下,是否能找到username,和psw
var result = {
	status :1,
	message:"登录成功"
}
// console.log(UserModel.find);
UserModel.find({username:username,psw:psw},function(err,docs){
		// console.log(2);
		if(!err && docs.length>0){
			// 生成session
			req.session.username = username;
			console.log("登录成功");
			res.send(result)
		}else{
			console.log("登录失败");
			result.status = -109;
			result.message ="登录失败"
			res.send(result)
		}
	})


})

module.exports = router;
