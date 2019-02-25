module.exports = function(connection, Sequelize) {
  const Product = connection.define('Product', {
    product_name: Sequelize.STRING,
    department_name: Sequelize.STRING,
    price: Sequelize.INT,
    stock_quantity: Sequelize.INT
  });

  return Product;
};
