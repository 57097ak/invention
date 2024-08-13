const express = require('express');
const router = express.Router();
const { Invention, Inventor } = require('../models'); 

// Endpoint to get the number of inventors for a specific invention
router.get('/:inventionId/inventors/count', async (req, res) => {
  const inventionId = req.params.inventionId;

  console.log('Invention Model:', Invention); // Log to check if the model is imported correctly

  try {
      const invention = await Invention.findByPk(inventionId, {
          include: [{ model: Inventor }]
      });

      if (invention) {
          const inventorCount = invention.Inventors.length;
          res.status(200).json({ count: inventorCount });
      } else {
          res.status(404).json({ message: 'Invention not found' });
      }
  } catch (error) {
      console.error('Error details:', error); // Log detailed error information
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
