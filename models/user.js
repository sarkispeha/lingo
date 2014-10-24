var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	wordsPractice: [
		{
			name: String,
			numWrong: Number,
			timesPracticed: Number
		}
	]
});

module.exports = mongoose.model('user', userSchema);