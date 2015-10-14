/**
 * Created by Administrator on 2015/10/14.
 */
'use strict';
var qs = require('querystring');
var url = require('url');
module.exports = function query(req){
    let query = url.parse(req.url).query;
    return  qs.parse(query);

};



