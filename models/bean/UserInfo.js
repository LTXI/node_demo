/**
 * Created by LIUTX on 2017/3/23.
 */
module.exports = function () {
    //属性
    var name ='';
    var password ='';
    //.......

    //自定义方法es5 es6
    this.toString = function() {
        console.log(this.name +' is '+ this.password +' years old');
    };
};
