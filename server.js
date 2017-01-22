var express = require('express')
var app = express()
var cors = require('cors');

app.options('*', cors());
app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/products', function (req, res) {
    var products = [
        {
            id: 1,
            name: 'Incroyable myrte',
            description: 'Melange parfait de myrte et de rhum',
            image: 'to/define',
        },
        {
            id: 2,
            name: 'Parfait citron',
            description: 'Rhum infusé au citron',
            image: 'to/define',
        }
    ]
    res.header('Access-Control-Allow-Origin', '*');
    res.send(products);
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!')
})
