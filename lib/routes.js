'use strict';

const Home = require('./controllers/home');
const Note = require('./controllers/note');


module.exports = [
//{
//  method: 'GET',
//  path: '/',
//  handler: function (request, h) {
//    return 'hello world';
//  }
//},

{
  method: 'GET',
  path: '/',
  handler: Home,
  config: {
    description: 'Gets all the notes available'
  }
},


{
  method: 'PUT',
  path: '/note',
  handler: function (request, h) {
    return 'new note';
  }
},

{
  method: 'GET',
  path: '/note/{slug}',
  handler: function (request, h) {
    return 'This is a note';
  }
},




];
