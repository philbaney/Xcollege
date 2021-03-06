'use strict';

const Models = require('../models/');

module.exports = (request, reply) => {
  Models.Note
    .findAll({
      order: [['date', 'DESC']]
    })
    .then((result) => {
      reply({
        data: {
          notes: result
        },
        page: 'HomeóNotes Board',
        description: 'Welcome to my Notes Board'
      });
    });
};


