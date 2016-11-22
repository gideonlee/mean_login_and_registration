var path = require('path');
var UserController = require('../controllers/users');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../client/index.html'));
	});

	// DELETE THIS SERVER ROUTE LATER
	app.get('/users', UserController.index);

	app.post('/users', UserController.create);
}