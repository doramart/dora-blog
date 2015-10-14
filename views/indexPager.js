/**
 * Created by Administrator on 2015/10/10.
 */
'use strict';
var AbstractPager = require('./AbstractPager')
class IndexPager extends AbstractPager{
    constructor(articelList,isLogined){
        super(isLogined);
        this.list = articelList;
    }

    _render(){

        let listDomString = this.list.map( (articel,index) => `<li class="list-group-item"><h3>${articel.title}</h3><p>${articel.body}</p>
        <div class="${this.isLogined ? '' : 'hide'}">
            <a href="/del?id=${index}">DEL</a>
            <a href="/update?id=${index}">UPDATE</a>
        </div>
        </li>`).join('');
        return `

            <ul class="list-group">
              ${listDomString}
            </ul>
        `;

    }
}

module.exports = IndexPager;