/**
 * Created by Administrator on 2015/10/10.
 */
'use strict';
var AbstractPager = require('./AbstractPager');
class AddPager extends AbstractPager{
    constructor(errors,isLogined){
        super(isLogined);
        this.errors = errors || {};
    }

    _render(){

        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';

        return `
            <form action='/add' method='post'>
              <div class="form-group">
                <label for="title">标题</label>
                <input type="text" class="form-control" name="title" id="title" placeholder="标题">
                <p class="text-danger">${titleError}</p>
              </div>
              <div class="form-group">
                <label for="body">内容</label>
                <textarea class="form-control" id="body" name="body" placeholder="内容" ></textarea>
                <p class="text-danger">${bodyError}</p>
              </div>

              <button type="submit" class="btn btn-default">添加</button>
            </form>
        `;

    }
}

module.exports = AddPager;