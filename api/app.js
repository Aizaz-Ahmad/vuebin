const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);
app.use('/api', require('./router'));

module.exports = app;
