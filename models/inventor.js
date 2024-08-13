const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Inventor = sequelize.define('Inventor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userRole: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inventorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  workTelNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  empCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reportingHead: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Disable createdAt and updatedAt if not needed
  tableName: 'Inventor',
});

module.exports = Inventor;
