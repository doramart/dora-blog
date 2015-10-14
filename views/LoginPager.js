/**
 * Created by Administrator on 2015/10/10.
 */
'use strict';
var AbstractPager = require('./AbstractPager');
class LoginPager extends AbstractPager{
    constructor(errors,isLogined){
        super(isLogined);
        this.errors = errors || {};
    }

    _render(){

        let time = Date.now();

//        let titleError = this.errors.title || '';
//        let bodyError = this.errors.body || '';

        return `
            <form action='/login' method='post'>
              <p>${this.errors}</p>
              <div class="form-group">
                <label for="title">登录名称</label>
                <input type="text" class="form-control" name="loginname" placeholder="登录名称">

              </div>
              <div class="form-group">
                <label for="title">登录密码</label>
                <input type="password" class="form-control" name="password" placeholder="登录密码">

              </div>
              <div class="form-group">
                <label for="title">验证码 <img src="/vnum?${time}" /></label>
                <input type="text" class="form-control" name="vnum" id="vnum">

              </div>
              <button type="submit" class="btn btn-default">添加</button>
            </form>
        `;

    }
}

module.exports = LoginPager;