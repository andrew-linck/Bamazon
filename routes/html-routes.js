// Dependencies
// =============================================================

// Requiring our models
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route that returns the page
  app.get('/', function(req, res) {
    res.sendfile('/Users/andrew/CourseWork/Bamazon/public/index.html')
  })
  
};
