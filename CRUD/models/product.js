'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
        this.belongsTo(User,{foreignKey:'userId',as:'user'})
    }
  }
  Product.init({
    Pname: {
    type:DataTypes.STRING,
    allowNull:false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
   {
    sequelize,
    tableName:"products",
    modelName: 'Product',
  });
  return Product;
};