/**
 * Created by LIUTX on 2017/3/23.
 */
/**
具体的业务逻辑控制
*/

var query = require('../dao/userdao.js');

var UserInfo = require('../bean/UserInfo.js');

//登录验证
exports.login = function (req, res, next) {
    console.log('1用户名 login');
    console.log(req);

    var username = req.body.username;
    var password = req.body.password;
    console.log("2用户名：" + username);
    console.log("2密码：" + password);
    var msg = {
        userid: "",
        username: "",
        usertype: "",
        msg: ""
    };
    var user = [username, password];
    query.queryUser(user, function (err, result) {
       /* 返回的结果
       if (err) {
            console.log(err);
            return;
        } else {
            console.log(result);
            var result = result;
            if (result.length <= 0) {
                msg.msg = "2";
                res.send(msg);
            } else {
                msg.msg = "1";
                msg.username = result[0].username;
                msg.userid = result[0].userid;
                msg.usertype = result[0].usertype;
                res.send(msg);
            }
        }*/


        //用户是否为空
        if (username == '') {
            msg.code = 1;
            msg.message = "用户名不能为空";
            res.json(msg);
            return;
        }
        //密码是否为空
        if (password == '') {
            msg.code = 2;
            msg.message = "密码不能为空";
            res.json(msg);
            return;
        }

        msg.code = 0;
        msg.message = "注册成功";
        //res.json(msg);
    })
    var  userInfo = new UserInfo();
    userInfo.name = username;
    userInfo.password = password;


    res.cookie("account", {"username":username,'password':password}, {maxAge: 60000});
    //设置cookie
    //console.log("设置cookie：");
   res.render('admin/index', { title: '标题', 'userInfo': userInfo ,"username":username,});
    console.log("3用户名：" + username);
    console.log("3密码：" + password);
};
