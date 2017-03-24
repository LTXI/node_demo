/**
 * Created by LIUTX on 2017/3/22.
 */
//其他边缘请求处理
var express = require('express');
var router = express.Router();


/*router.get('/login', function(req, res, next) {
    res.render('/admin/login', { title: '登录' });
});*/
router.get('/', function(req, res, next) {
    console.log("mian    11111111111111");
    res.send({"index":'首页'});
});


module.exports = router;