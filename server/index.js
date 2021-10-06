const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');

const app = express();
const PORT = config.get('serverPort');

const authRouter = require('./routes/auth.routes');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('dbURL'));
    app.listen(PORT, () => {
      console.log('Server Started on Port', PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
