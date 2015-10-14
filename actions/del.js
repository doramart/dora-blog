/**
 * Created by Administrator on 2015/10/14.
 */
    'use strict';

var database = require('../database');
var getId = require('./getId');
var IndexAction = require('./index');

module.exports = function del(req,res){

    getId(req,id=>{
        database.del(id);
        IndexAction(req,res);
    })


};