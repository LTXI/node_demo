/**
 * Created by LIUTX on 2017/3/22.
 */

//加载模块
var express  = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var ejs = require('ejs');

//创建服务
var app = new express();

//设置静态路径资源 public
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use('/public', express.static(path.join(__dirname, 'public')));

//使用ejs模版，配置为.html

app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//开发过程中不缓存false，  结速开发true
app.set('view cache', false);

//模块划分，设置路由, 不同模块在对应的路由文件中配置处理请求

//后台管理的api
app.use('/admin', require('./routers/admin'));
//ajax请求api
app.use('/api', require('./routers/api'));
//前台展示
// app.use('/', require('./routers/main'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




app.listen(8070, function (req, res, next) {
    console.log('the server has begin...listen');
});


module.exports = app;

