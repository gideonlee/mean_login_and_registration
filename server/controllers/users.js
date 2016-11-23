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

	findUser: function(req, res) {
		User.find({_id: req.params.id}, function(err, selectedUser) {
			if (err) {
				res.json(err);
			} else {
				res.json(selectedUser);
			}
		});
	},

	register: function(req, res) {
		var newUser = new User(req.body);
		var error = newUser.validateSync();

		if (newUser.comparePasswords(req.body.password_confirm) && error === undefined) {
			// Encrypt the password.
			newUser.password = newUser.encryptPassword();

			// Make the email all lowercase.
			newUser.email = req.body.email.toLowerCase();
			newUser.save(function(err, user) {
				if (err) {
					res.json(err);
				} else {
					res.json(user);
				}
			});
		} else {
			// Status 400 allows the promise to 'catch' the error. 
			res.status(400); 
			res.json(error);
		}
	},

	login: function(req, res) {
		// req.body must be all lowercased as that is how it is recorded into the db.
		User.find({email: req.body.email.toLowerCase()}, function(err, selectedUser) {
			if (err) {
				res.json(err);
			} else {
				if (selectedUser[0] && selectedUser[0].decryptPassword(req.body.password)) {
					// Status will probably be 200, which will fall into the 'then'
					res.json(selectedUser);
				} else {
					// Status 400 allows the promise to 'catch' the error.
					res.status(400);
					res.json({error: 'BOBLOBBLOB ERROR-BOB'});
				}
			}
 		});
	},
};