'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Models = require('./lib/models/');
const server = new Hapi.Server({  
  host: 'localhost',
  port: 3000
})

server.route(Routes);
Models.sequelize.sync().then(() => {
	server.start((err) => {
		Hoek.assert(!err, err);
		console.log(`Server running at: ${server.info.uri}`);
	});
});
