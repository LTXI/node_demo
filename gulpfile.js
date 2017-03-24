/**
 * Created by LIUTX on 2017/3/22.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');// 获取 uglify 模块（用于压缩 js）
var minifyCSS = require('gulp-minify-css');// 获取 minify-css 模块（用于压缩 CSS）
var sass = require('gulp-ruby-sass');
var htmlminify = require("gulp-html-minify");
// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function () {
    // 1. 找到文件
    gulp.src('public/js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('public/dist/js'))
})
gulp.task('default',function(){
    console.log('hello world');
});