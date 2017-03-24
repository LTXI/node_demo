/**
 * Created by LIUTX on 2017/3/23.
 */
/**
 * 数据库操作  数据增删改查等,获取想要的数据
 * @type {*}
 */
var mysqlconnection = require('../../config/dbconfig.js');
var usermysql = require('../sql/usersql');

module.exports = {
    queryUser: function(params,callback){
        mysqlconnection.query(usermysql.queryUser,params, function (err, result) {
            //暂无查询数据库，直接回调返回
           /* if (err) {
                callback(err, null);
            }
            else {
                callback(err, result);
            }*/

            callback();
        })
    },
}