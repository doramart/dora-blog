/**
 * Created by Administrator on 2015/10/14.
 */
var query = require('./query');
var post = require('./post');

module.exports = function getId(req,callback){
    if(req.method === 'GET'){
        // del?id=xxx
        var data = query(req);
        callback(data.id)
    }else{
        post(req).then(function(data){
            callback(data.id)
        })
    }
}