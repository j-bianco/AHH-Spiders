const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const host = process.env.HOST || null;

app.use(express.static(path.join(__dirname, '../app/public')));

app.listen(port, host, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`listening on ${port}`);
  }
});
