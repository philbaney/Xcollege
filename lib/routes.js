'use strict';

module.exports = [
{
  method: 'GET',
  path: '/helloworld',
  handler: function (request, h) {
    return 'hello world';
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
