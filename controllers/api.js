var Quiz = require('../models/quiz_schema.js');
var BeGlobal = require('node-beglobal');

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'rMglBMqPyVuowTtkTG4Q%2BA%3D%3D'
});

var api = {
	translateWord: function (req, res) {
		beglobal.translations.translate( req.body, function(err, results) {
				if (err) {res.send(err);}
				res.send(results);
  			}
		);
	},
	getWord: function (req, res) {
		var num = parseInt(req.query.num);
		Quiz.find({}, function (err, results) {
			res.send(results[0].words[num]);
		});
		
	}
}

module.exports = api;