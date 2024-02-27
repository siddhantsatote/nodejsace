const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/about', async (req, res) => {
  res.render('about');
});

app.get('/services', async (req, res) => {
  res.render('services');
});

app.get('/appointment', async (req, res) => {
  res.render('appointment');
});

app.get('/contact', async (req, res) => {
  res.render('contact');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
