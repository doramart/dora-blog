/**
 * Created by Administrator on 2015/10/14.
 */
    'use strict';
var qs = require('querystring');
var cache = {};
var sid = 0;

module.exports = function(req,res){
    var cookie = req.headers.cookie;
    var cookieJSONObj = {};
    // ssssssss;tttttt
    if(cookie){
        cookieJSONObj = qs.parse(cookie.split(';').join('&'));
    }

    if(cookieJSONObj.sid && cache[cookieJSONObj.sid]){
        return cache[cookieJSONObj.sid];
    }else{
        sid += 1;
        res.setHeader('Set-Cookie',[`sid=${sid}`]);
        return cache[sid] = {};
    }

};