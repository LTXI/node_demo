/**
 * Created by LIUTX on 2017/3/23.
 */
/**
 * 统一汇总SQL语句，以供dao使用
 * @type {{queryUser: string, queryShipInfo: string, queryAllBlacklist: string, queryBlackInfo: string, queryLocaltion: string, queryAllShip: string, cancelBlack: string, queryOrderlist: string, queryOrderInfo: string, queryIllEgal: string, queryIllEgalInfo: string, queryLawList: string, queryLawInfo: string}}
 */
var mySql = {
    queryUser: 'select * from tbuser where username=? and pwd=?',
    queryShipInfo: 'select * from shipinfo where rfid=?',
    queryAllBlacklist: 'select * from tbblackship where iscancelblack=0',
    queryBlackInfo: 'select * from tbblackship where id=?',
    queryLocaltion: 'select * from shippoints where rfid=? order by id desc limit 1',
    queryAllShip:'select * from shipinfo',
    cancelBlack:'update tbblackship set iscancelblack=1 where id=?',
    queryOrderlist:'select * from orders',
    queryOrderInfo:'select * from orders where id=?',
    queryIllEgal:'select * from shipillegal',
    queryIllEgalInfo:'select * from shipillegal where id=?',
    queryLawList:'select * from lawrecord',
    queryLawInfo:'select * from lawrecord where id=?'
};

module.exports = mySql;