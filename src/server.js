const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const { name = 'World' } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
});

module.exports = app;
