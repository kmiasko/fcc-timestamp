const express = require('express');
const moment = require('moment');

const app = express();

app.get('/:date', (req, res) => {
  if (req.params.date) {
    const date = moment(req.params.date, ['X', 'MMMM D, YYYY']);
    if (date.isValid()) {
      const unix = date.format('X');
      const natural = date.format('MMMM D, YYYY');
      res.send(JSON.stringify({ unix, natural }));
    } else {
      res.send(JSON.stringify({ unix: null, natural: null }));
    }
  }
  res.end();
});

app.listen(process.env.PORT || 8080);
