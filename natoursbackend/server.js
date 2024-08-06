const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log('Error connecting DB', err);
  });
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
