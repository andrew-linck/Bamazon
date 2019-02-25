module.exports = function(connection, Sequelize) {
  const Product = connection.define('Product', {
    product_name: { type: Sequelize.STRING },
    department_name: { type: Sequelize.STRING },
    price: { type: Sequelize.STRING },
    stock_quantity: { type: Sequelize.STRING }
  });

  return Product
};