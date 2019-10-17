var tutorail = require('../controller/tutorail')
var app = require('express').Router();

//########################################
//########################################
//########################################

const https = require('https')

app.get('/', (req, res, next) => {
    res.send('Rest Api Node.js');
});

app.get('/getServerTime', (req, res, next) => {
    var time = new tutorail().getServerTime();
    console.log(`time : ${time.TIME}`);
    res.json(time);
});

app.get('/random', (req, res, next) => {
    var randomNumber = new tutorail().randomNumber();
    var random = { RANDOM : randomNumber}
    res.json(random);
   

});

app.post('/sumAB', (req, res, next) => {
    var sum = new tutorail().sumAB(req.body);
    console.log(`A : ${req.body.numberB} ,B : ${req.body.numberB} ,SUM : ${sum}`);
    var sum = {SUM : sum}
    res.json(sum);

});





module.exports = app