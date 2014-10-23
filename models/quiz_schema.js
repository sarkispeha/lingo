var mongoose = require('mongoose');

var quizSchema = mongoose.Schema({
	words : [String]
});

module.exports = mongoose.model('quiz', quizSchema);