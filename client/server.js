const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/v1/portfolio', require('./routes/portfolioRoutes'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Node Server</h1>');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

