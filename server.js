/**
 * Created by Administrator on 2015/10/10.
 */
'use strict';
var http = require('http');
var url = require('url');
var actionResos = {};
var session = require('./session');

actionResos['/add'] = require('./actions/add');
actionResos['/del'] = require('./actions/del');
actionResos['/update'] = require('./actions/update');
actionResos['/login'] = require('./actions/login');
actionResos['/logout'] = require('./actions/logout');
actionResos['/'] = require('./actions/index');



http.createServer(function(request,response){
    request.session = session(request,response);
    response.writeHead('Content-Type','text/html');
    let pathname = url.parse(request.url).pathname;
    var action  = actionResos[pathname];
    if(action){
        action(request,response)
    }else{
        response.writeHead(404);
        response.end('no find')
    }

}).listen(3000);