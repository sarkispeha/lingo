var Quiz = require('./quiz_schema.js');

Quiz.find({}, function(err, results){
	if(results.length === 0 ){
		var newQuiz = new Quiz ({
			words : ['car', 'platypus', 'hegemony', 'error', 'coffee', 'computer', 'road', 'pencil', 'name', 'keyboard']
		});
		//save to db
		newQuiz.save();
	}
});