// const mongoose = require('mongoose');

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x =>
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`,
//     ),
//   )
//   .catch(err => console.error('Error connecting to mongo', err));


const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

