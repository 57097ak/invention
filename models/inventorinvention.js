const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const InventorInvention = sequelize.define('InventorInvention', {
  inventorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Inventor',
      key: 'id',
    },
    allowNull: false,
    primaryKey: true,
  },
  inventionId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Invention',
      key: 'id',
    },
    allowNull: false,
    primaryKey: true,
  },
  inventorType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, 
  tableName: 'InventorInvention',
});

module.exports = InventorInvention;
