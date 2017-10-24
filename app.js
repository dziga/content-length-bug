var express = require('express');
var compression = require('compression')
var app = express();

app.use(compression());

app.get('/', function(req, res) {
    res.set({ 'Content-Length': 8 });
    res.set({ 'Transfer-Encoding': 'chunked' });
    res.write('ABCDEFG');
    res.end();
    res.connection.end();
})

app.listen(3000, function() {
    console.log('http://127.0.0.1:3000');
});