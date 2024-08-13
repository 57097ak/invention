const { Invention, Inventor, InventorInvention } = require('./models'); 

const syncDatabase = async () => {
  try {
    await Invention.sync({ force: true }); 
    await Inventor.sync({ force: true }); 
    await InventorInvention.sync({ force: true }); 
    
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
};

syncDatabase();
