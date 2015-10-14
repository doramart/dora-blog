/**
 * Created by Administrator on 2015/10/10.
 */
var IndexPager = require('../views/indexPager');
var database = require('../database');
module.exports = function(req,res){
    res.end(new IndexPager(database.list,req.session.isLogined).render());
};