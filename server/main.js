const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();

const args = process.argv.slice(2);
const SERVER_PORT = args.length && /port=\d+/.test(args[0]) ? args[0].split('=')[1] : 8081;

const manifest = JSON.parse(fs.readFileSync('build/manifest.json'));

function getBrand(req) {
  const { brand } = req.query;
  return ['red', 'blue'].includes(brand) ? brand : 'red';
}

app.use(morgan('combined'));
app.use(express.static('build'));

app.set('views', 'templates');

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
