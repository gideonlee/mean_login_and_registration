var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema({
	first_name: {type: String, required: true, minlength: 2},
	last_name: {type: String, required: true, minlength: 2},
	email: {type: String, required: true, unique: true},
	birthday: {type: Date, required: true},
	password: {type: String, required: true, minlength: [8, 'TOOO SHORT']}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);