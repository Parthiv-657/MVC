const path = require('path');
const fs = require('fs');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
);

const getDataFromFiles = (cb)=>{
    fs.readFile(p, (err, fileContents)=>{
        if(err)
        {
            return cb([]);
        }
        cb(JSON.parse(fileContents));
    })
}

module.exports = class Product{
    constructor(title)
    {
        this.title = title;
    }
    save()
    {
        getDataFromFiles((products)=>{
            products.push(this);
            fs.writeFileSync(p, JSON.stringify(products), (err)=>{
                console.log(err);
            })
        })
    }
    static fetchAll(cb)
    {
        getDataFromFiles(cb);
    }
}