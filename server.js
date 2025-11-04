const express = require('express');
const path = require('path');
const app = express();

const PUBLIC_DIR = path.join(__dirname, 'public');

// statische Dateien unter /fit-app
app.use('/fit-app', express.static(PUBLIC_DIR));

app.get('/', (req, res) => res.redirect('/fit-app/'));

// optional: einfache API (z.B. für statische JSON Daten)
app.get('/api/stats', (req, res) => {
  res.json({ message: 'Hier kommen die BMI-Statistiken (mock).' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}/fit-app`);
});
