const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! ');
});

app.listen(3000, () => {
  console.log(`app listening on PORT: ${3000}`);
});

module.exports = app;