'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg:'El nombre es obligatorio',
        },
        notEmpty: {
          msg:'El nombre no puede quedar vacio.',
        },
        isAlpha:{
          msg:'El nombre solo puede contener letras.',
        },        
      }      
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg:'Los apellidos no pueden quedar vacios.',
        },
        isAlpha:{
          msg:'Los apellidos solo pueden contener letras.',
        },        
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg:'El email es obligatorio',
        },
        notEmpty: {
          msg:'El email no puede quedar vacio.',
        },
        isEmail:{
          msg:'Debe proporcionar un email valido.',
        },        
      }   
    },
    phone: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};