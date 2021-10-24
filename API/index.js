const app = require('express')();
const mongodb = require('../API/mongodb');

const PORT = 8080;

app.listen(PORT, () => console.log(`API Running on port ${PORT}`))

app.get('/respostas', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/');
    const products = await mongodb.collection.find().toArray();
    res.send(products);
})