var mysql = require("mysql");
/**
 * mysql连接配置信息
 * @type {{host: string, user: string, password: string, database: string, port: number}}
 */
var config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ship',
    charset: 'utf8',
    port: 3306,
    multipleStatements: true//允许每个mysql语句有多条查询
};
var pool = mysql.createPool(config);
module.exports = {
    query: function (sql, params, callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                callback(err, null);
            }
            else {
                conn.query(sql, params, function (err, result) {
                    //释放连接
                    conn.release();
                    //事件驱动回调
                    callback(err, result);
                })
            }
        })
    }
};