var User = require('../models/user.js');
var BeGlobal = require('node-beglobal');
var randomWords = require('random-words')

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
		res.send(randomWords(1));
	},

	addWord: function (req, res) {
		var word = req.body.word;
		var correct = req.body.correct;
		User.findOne({}, function (err, result) {
			if (result.words) {
				if(result.words.word) {
					if (correct) {
						// Implement
					}
				}
			}
		});
	}
}

module.exports = api;