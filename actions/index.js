/**
 * Created by Administrator on 2015/10/10.
 */
var IndexPager = require('../views/indexPager');
module.exports = function(req,res){

    var title = 'test title';
    res.writeHead('Content-Type','text/html');
    res.end(new IndexPager(title).render());
};