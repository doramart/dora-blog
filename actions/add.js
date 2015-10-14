/**
 * Created by Administrator on 2015/10/10.
 */
'use strict';
var database = require('../database');
var AddPager = require('../views/AddPager');
var post = require('./post');
var IndexPager = require('../views/indexPager');
var LoginAction = require('./login');
module.exports = function(req,res){

    if(!req.session.isLogined){
        LoginAction(req,res);
        return;
    }

    if(req.method === 'GET'){
        res.writeHead('Content-Type','text/html');
        res.end(new AddPager().render());
    }else{
        post(req).then(function(data){
            var errors = {};
            if(!(data.title && data.title.length >= 5)){
                errors.title = 'title chart length >=5'
            }
            if(!(data.body && data.body.length >= 15)){
                errors.body = 'body chart length >=15'
            }

            console.log('--------'+Object.keys(errors).length)

            if(Object.keys(errors).length){
                res.writeHead('Content-Type','text/html');
                res.end(new AddPager(errors,req.session.isLogined).render());
            }else{
                database.add(data);
                res.end(new IndexPager(database.list,req.session.isLogined).render());
            }
        })
    }
};