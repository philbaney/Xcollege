'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes');

const server = new Hapi.Server({  
  host: 'localhost',
  port: 3000
})

server.route(Routes);

server.start((err) => {
  Hoek.assert(!err, err);

  console.log(`Server running at: ${server.info.uri}`);
});
