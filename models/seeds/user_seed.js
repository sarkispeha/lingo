var User = require('../user.js');

User.find({}, function (err, results) {
	if (results.length === 0) {
		var newUser = new User();
		newUser.save();
	}
});