/**
 * Created by LIUTX on 2017/3/22.
 */

var express = require('express');
var router = express.Router();

var userbuss = require('../models/business/userbuss.js');

//统一返回提示格式
var responseData ;
router.use(function (req, res, next) {
    responseData = {
        message:'',
        code:0
    }
    next()
});

//后台登录
router.get('/', function (req, res, next) {
    console.log("admin   11111111111111");
    res.render('admin/login', { title: '后台登录' });
    //res.send('admin-User');
});

//登录验证 后台登录
router.post('/login', userbuss.login);

//router.post('/login',function(req, res, next) {
   // console.log('1用户名 login');
    //console.log(req);
    /*var username = req.body.username;
    var password = req.body.password;

    console.log("1用户名：" + username);
    console.log("1密码：" + password);*/
//});
// router.get('/login2',function(req, res, next) {
//     console.log("我是等待");
//     //res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//     console.log("login2login2：" );
//     res.render('admin/login2', { title: '后台首页页面' });
// });






















function isLogined(req){
    console.log("isLogined.");
    if(req.cookies["account"] != null){
        var account = req.cookies["account"];
            var username = account.username;
            if(username){
                console.log("isLogined. true");
                return true;
        }
    }
    console.log("isLogined false.");
    return false;
};
function getCookieValue(req, cookiename, valuekey) {
    var cookie = req.cookies[cookiename];
    var value = cookie[valuekey];
    return value;
};
router.get('/index', function(req, res, next) {
    console.log("index----");
    if(isLogined(req)){
        console.log("cookie index");
        var value = getCookieValue(req, 'account','username' );
        res.render('admin/index', { title: 'index1经登录了', username:value});
    }else{
        console.log("no cookie index");
        res.redirect('admin/login');
    }
    //res.render('admin/index', { title: 'index1' });
    // res.send('admin-User');
});
//测试index1 框架跳转 回调函数要迟到业务处理处
router.get('/index1', function(req, res, next) {
    console.log("index11");
    res.render('admin/index1', { title: 'index1' });
    // res.send('admin-User');
});
router.get('/index2', function(req, res, next) {
    console.log("index2");
    res.render('admin/index2', { title: 'index2' });
});
router.get('/index3', function(req, res, next) {
    console.log("index3");
    res.render('admin/index3', { title: 'index3' });
});























/** //首页
router.get('/user', function(req, res, next) {
    //res.render('admin/index', { title: '后台首页' });
    res.send('admin-User');
});


router.get('/user/register', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    //用户是否为空
    if (username == '') {
        responseData.code = 1;
        responseData.message = "用户名不能为空";
        res.json(responseData);
        return;
    }
    //密码是否为空
    if (password == '') {
        responseData.code = 2;
        responseData.message = "密码不能为空";
        res.json(responseData);
        return;
    }
    //密码不一致
    if (password == repassword) {
        responseData.code = 3;
        responseData.message = "密码不一致";
        res.json(responseData);
        return;
    }

    responseData.message = "注册成功";
    res.json(responseData);
});*/

module.exports = router;
