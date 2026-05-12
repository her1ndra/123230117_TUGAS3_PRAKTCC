const express = require('express');
const cors = require('cors');
require('dotenv').config();

const noteRoutes = require('./routes/noteRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});