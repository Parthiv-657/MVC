const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://parthiv:parthiv@joe-mama.wnc5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if(_db)
  {
    return _db;
  }
  throw 'No Database Found';
}

module.exports.getDb = getDb;
module.exports.mongoConnect = mongoConnect;
