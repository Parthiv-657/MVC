const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const getDb = require('../util/database').getDb;

class Product{

  constructor(title, price, description, imageURL, _id){
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageURL = imageURL;
    this._id = _id;
  }

  save(){
    const db = getDb();
    let dbOb;
    if(this._id){
      dbOb = db.collection('shop').updateOne({_id : new ObjectId(this._id)}, {$set : this})
    } else {
      dbOb = db.collection('shop').insertOne(this);
    }
    return dbOb
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
  }

  static findById(prodId){
    const db = getDb();
    return db.collection('shop').find({_id : new mongodb.ObjectId(prodId)})
    .next()
    .then(product => {
      return product;
    })
    .catch(err => {
      console.lof(err);
    });
  }

  static fetchAll(){
    const db = getDb();
    // console.log(db)y 
    return db.collection('shop').find().toArray()
    .then(products =>{
      return products;
    })
    .catch(err => {
      console.log(err);
    });
  }
}

module.exports = Product;