const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res) => {
  return res.render('index', { title: 'Express' });
});

module.exports = app;
