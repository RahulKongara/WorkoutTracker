const express = require('express')
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());

const fs = require('fs');
const path = require('path');

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/exercises', (req, res) => {
    console.log('exercises API hit');

    const dataPath = path.join(__dirname, 'exercise.json');
    fs.readFile(dataPath, 'utf8', (err, jsonData) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to load data' });
        } 
        res.json(JSON.parse(jsonData));
    });
});

app.listen(PORT, () => {
    console.log(`API Server running on http://localhost:${PORT}/exercises`);
});