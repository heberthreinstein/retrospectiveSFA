const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:<password>@cluster0.jxoyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
    .then(() => console.log("Connected to the database"))
    .catch(err => console.log(err));

const collection = client.db("restrospectiveSFA").collection("respostas");

module.exports = {collection};