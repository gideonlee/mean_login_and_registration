var User = require('./../models/user');

module.exports = {
	// DELETE THIS FUNCTION KEY VALUE FUNCTION LATER
	index: function(req, res) {
		User.find({}, function(err, allUsers) {
			if (err) {
				res.json(err);
			} else {
				res.json(allUsers);
			}
		});
	},

	create: function(req, res) {
		// BCRYPT MIGHT GO HERE? 
		// IF req.body.pass and pass confirm are equal, then create it with the hashed passwords? 
		
		User.create(req.body, function(err, newUser) {
			if (err) {
				res.json(err);
			} else {
				res.json(newUser);
			}
		});
	},
};