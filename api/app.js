const express = require('express');
const app = express();
const cors = require('cors');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use('/api', require('./router'));

module.exports = app;
