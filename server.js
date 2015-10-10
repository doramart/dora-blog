/**
 * Created by Administrator on 2015/10/10.
 */
'use strict';
var http = require('http');
var url = require('url');
var actionResos = {};

//handleResos['add'] = require('./actions/add');
//handleResos['del'] = require('./actions/del');
//handleResos['update'] = require('./actions/update');
actionResos['/'] = require('./actions/index');



http.createServer(function(request,response){
    let pathname = url.parse(request.url).pathname;
    var action  = actionResos[pathname];
    if(action){
        action(request,response)
    }else{
        response.writeHead(404);
        response.end('no find')
    }

}).listen(3000);