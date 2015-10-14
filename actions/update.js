/**
 * Created by Administrator on 2015/10/14.
 */
'use strict';
var EditPager = require('../views/EditPager');
var database = require('../database');
var query = require('./query');
var post = require('./post');
var IndexAction = require('./index');
var LoginAction = require('./login');
module.exports = function(req,res){

    if(!req.session.isLogined){
        LoginAction(req,res);
        return;
    }

    if(req.method == 'GET'){
        var id = query(req).id;
        var article = database.list[id];
        var errors = {};
        res.end(new EditPager(id,article,errors,req.session.isLogined).render());
    }else{
        post(req).then(data =>{
//            let {id,title,body} = data;
            let id = data.id;
            delete data.id;
            database.update(data.id,data);
            IndexAction(req,res);
        })
    }
};