var express = require('express');
var router = express.Router();
var md5 = require("md5")
var UserModel = require("../model/Usermodel")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});

router.post("/api/login",function(req,res){
var username = req.body.username;
	var psw = md5(req.body.psw);

var result = {
	status :1,
	message:"登录成功"
}
	UserModel.find({username:username,psw:psw},function(err,docs){
		if(!err&&docs.length>0){
			console.log("登录成功");
			res.send("登陆成功")
		}else{
			console.log("登录失败");
			result.status = -109;
			result.message ="登录失败"
			res.send(result)
		}
	})


})

/*router.post("/api/regist",function(req,res){
	var username = req.body.username;
	var pwd = req.body.pwd;
	//保存功能
	var  um = new UserModel();
	um.username = username;
	um.psw = psw;
	um.save(function(err){
		if(err){
			console.log("登录失败",err)
			res.send("登录失败")
		}else{
			console.log("登录成功")
			res.send("登录成功")


		}
	})*/


// })

module.exports = router;
