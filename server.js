const express = require('express');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
  res.end();
});

app.listen(process.env.PORT || 8080):