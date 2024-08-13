const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const inventionRoutes = require('./routes/invention'); // Adjust path as needed

app.use(bodyParser.json());

// Routes
app.use('/api/invention', inventionRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
