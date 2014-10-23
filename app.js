var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lingodb');

require('./models/quiz_seeds.js');




var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/picklang', indexController.picklang);
app.get('/translate', indexController.translate);
app.get('/quiz', indexController.quiz);

app.get('/api/getWord', apiController.getWord);
app.post('/api/translateWord', apiController.translateWord);




var server = app.listen(3754, function() {
	console.log('Express server listening on port ' + server.address().port);
});
