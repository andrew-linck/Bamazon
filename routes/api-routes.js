// Requiring our models
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the articles
  app.get('/api/prouducts', function(req, res) {

    // Sequelize to find all products with the model
    db.Product.findAll({}).then(function(products) {
      res.json(products);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single product
  app.get('/api/product/:id', function(req, res) {
    
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(product) {
      res.json(product);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // PUT route for updating products
  app.put('/api/products/:id', function(req, res) {
    db.Article.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(product) {
      res.json(product);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

};
