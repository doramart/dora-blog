/**
 * Created by Administrator on 2015/10/10.
 */
'use strict'
class AbstractPager{
    constructor(isLogined){
        this.isLogined = isLogined;
    }

//    保护性方法
    _render(){
        throw new Error('子类必须实现');
    }

    render(){
        return `
        <!DOCTYPE html>
        <meta charset='utf-8' />
        <html>
            <head>
             <link rel='stylesheet' href='http://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.css' />
             <title>DoraCMS</title>
            </head>
            <body class='container'>
                <div>
                    <a href="/login" class="${this.isLogined ? 'hide' : ''} btn btn-default">登录</a>
                    <a href="/logout" class="${this.isLogined ? '' : 'hide'} btn btn-danger">退出</a>
                    <a href="/add" class="${this.isLogined ? '' : 'hide'} btn btn-danger">添加</a>
                </div>
                ${this._render()}
            </body>
        </html>
    `
    }
}

module.exports = AbstractPager;