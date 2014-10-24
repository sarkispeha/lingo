

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	translate: function(req, res) {
		res.render('translate');
	},

	picklang: function(req, res) {
		res.render('picklang');
	},
	quiz: function (req, res) {
		// res.send(req.query);
		res.render('quiz', {
			answerLang: req.query.answer
		})
	}
};

module.exports = indexController;