/**
 * Created by Administrator on 2015/10/14.
 */
var LoginPager = require('../views/LoginPager');
var post = require('./post');
var IndexAction = require('./index');
module.exports = function(req,res){


    req.session.isLogined = false;
    IndexAction(req,res);

};