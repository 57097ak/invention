const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Invention = sequelize.define('Invention', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  typeOfInnovation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titleOfInvention: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  areaOfTechnology: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  summaryOfInvention: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  inventionDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  problemSolved: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  stageOfDevelopment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inventionReference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  submissionDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nextAction: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false, 
  tableName: 'Invention',
});

module.exports = Invention;
