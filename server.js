'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');

const server = new Hapi.Server({  
  host: 'localhost',
  port: 3000
})

server.route({
  method: 'GET',
  path: '/helloworld',
  handler: function (request, h) {
    return 'hello world';
  }
});
server.start((err) => {
  Hoek.assert(!err, err);

  console.log(`Server running at: ${server.info.uri}`);
});
