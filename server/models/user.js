var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema({
	first_name: {
		type: String, 
		required: true, 
		validate: {
			validator: function(first_name) {
				return first_name.length >= 2;
			},
			message: 'First Name must at least two characters.'
		}
	},
	last_name: {
		type: String, 
		required: true, 
		validate: {
			validator: function(last_name) {
				return last_name.length >= 2;
			},
			message: 'Last Name must be at least two characters.'
		}
	},
	email: {
		type: String, 
		required: true, 
		unique: true,
		validate: {
			validator: function(email) {
				var emailRegex = /^[\w\.+_-]+@[\w\._-]+\.[\w]*$/;
				return emailRegex.test(email);
			},
			message: 'Email is screwy.'
		}
	},
	birthday: {
		type: Date, 
		required: true
	},
	password: {
		type: String, 
		required: true, 
		validate: {
			validator: function(password) {
				return password.length > 7;
			},
			message: 'Password is screwy.'
		}
	}
}, {timestamps: true});

// These functions allows a user object to check, compare passwords, and encrypt them. 
UserSchema.methods.comparePasswords = function(password_confirm) {
	return this.password === password_confirm;
};

UserSchema.methods.encryptPassword = function() {
	return bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
};

UserSchema.methods.decryptPassword = function(user_input_pw) {
	return bcrypt.compareSync(user_input_pw, this.password);
};

module.exports = mongoose.model('User', UserSchema);