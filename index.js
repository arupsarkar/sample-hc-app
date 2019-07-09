const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/', function(req, res, next) {
    res.send('hello world');
});

app.set('port', process.env.PORT || port);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
