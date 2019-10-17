var express = require('express');
var app = express();
var port = process.env.port || 9001;

var cors  = require('cors')

var bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors( {origin: '*'} ))

app.use('/api', require('./router/index'));

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});
// var request = require('request');

// var server = http.createServer(function (req, res) {
//     res.end('Hello world');
//   });


//   request({
//     method: 'GET',
//     url: 'http://127.0.0.1:8080?L=kkkk'
//   }, function (err, res) {
//     if (err) return console.error(err.message);
  
//     console.log(res.body);
//     // Hello world
  
//     server.close();
//   });