const express = require('express');
const app = express()

app.get('/products', (req, res) => {
    const MongoClient = require('mongodb').MongoClient;
    const co = require('co');
    const mongodb_uri = process.env.MONGODB_URI;
    res.header('Access-Control-Allow-Origin', '*');
    co(function*() {
        var db = yield MongoClient.connect(mongodb_uri);
        console.log("Connected correctly to server");
        db.collection('products').find().toArray((err, results) => {
            res.send(results);
        });
        db.close();
    }).catch(function(err) {
      console.log(err.stack);
    });
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!')
})
