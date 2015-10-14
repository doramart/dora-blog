/**
 * Created by Administrator on 2015/10/14.
 */

var LoginPager = require('../views/LoginPager');
var post = require('./post');
var IndexAction = require('./index');
module.exports = function(req,res){

    if(req.method == "GET"){
        res.end(new LoginPager().render());
    }else{
        post(req).then(data =>{
            var loginname = data.loginname;
            var password = data.password;

            if((loginname && password && loginname == 'dora' && password == '123456')){
                req.session.isLogined = true;
                IndexAction(req,res);
            }else{
                res.end(new LoginPager('登录失败！').render());
            }
        })
    }

};