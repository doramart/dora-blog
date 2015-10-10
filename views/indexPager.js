/**
 * Created by Administrator on 2015/10/10.
 */
'use strict';

class IndexPager{
    constructor(name){
        this.name = name;
    }

    render(){
        return `
        <!DOCTYPE html>
        <html>
            <body>
                ${this.name}
            </body>
        </html>
    `
    }
}

module.exports = IndexPager;