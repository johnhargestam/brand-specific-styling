const express = require('express');
const morgan = require('morgan');
const { join } = require('path');
const fs = require('fs');

const app = express();
const SERVER_PORT = 8081;

const manifest = JSON.parse(fs.readFileSync('build/manifest.json'));

function getBrand(req) {
  const { brand } = req.query;
  return ['red', 'blue'].includes(brand) ? brand : 'red';
}

app.use(morgan('combined'));
app.use(express.static('build'));

app.set('views', join(__dirname, '../templates'));

app.get('/', (req, res) => {
  res.render('index.twig', {
    brand: getBrand(req),
    manifest,
  });
});

app.get('/shop/', (req, res) => {
  res.render('shop.twig', {
    brand: getBrand(req),
    manifest,
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at http://localhost:${SERVER_PORT}/`);
});
