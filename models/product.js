const getDb = require('../util/database').getDb;

class Product{

  constructor(title, price, description, imageURL){
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageURL = imageURL;
  }

  save(){
    const db = getDb();
    return db.collection('products')
    .insertOne(this)
    .then(result => {
      console.log(result);
    })
    .catch(err =>{
      console.log(err);
    });
  }

}

module.exports = Product;