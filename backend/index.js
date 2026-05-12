const express = require('express');
const cors = require('cors');
require('dotenv').config();

const noteRoutes = require('./routes/noteRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', noteRoutes);

app.get('/', (req, res) => {
    res.json({
        message: "Selamat datang di Notes API!",
        status: "Running",
        endpoints: "/api/notes"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});