const Invention = require('./invention');
const Inventor = require('./inventor');
const InventorInvention = require('./inventorinvention');

// Define many-to-many relationships
Invention.belongsToMany(Inventor, { through: InventorInvention, foreignKey: 'inventionId' });
Inventor.belongsToMany(Invention, { through: InventorInvention, foreignKey: 'inventorId' });


module.exports = { Invention, Inventor, InventorInvention };
