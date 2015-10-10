/**
 * Created by Administrator on 2015/10/10.
 */
var fs = require('fs');
const filepath = __dirname + '/data.json';
var list;
try{
    list  = Json.parse(fs.readFileSync(filepath));
}catch(e){
    list = []
}


module.exports = {
    add(artice){
        list.push(artice)
    },
    del(index){
        list.splice(index,1)
    },
    update(index,newArticle){
        list.splice(index,1,newArticle)
    },
    get list(){
        return list;
    },
    store(){
        fs.write(filepath,Json.stringify(list),callback)
    }
};