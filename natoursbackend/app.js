const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log('hello from the middleware');
  next();
});

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `can't find ${req.originalUrl} on this server`,
  });
});

module.exports = app;
