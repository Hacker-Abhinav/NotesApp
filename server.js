const express = require('express');
const bodyprs = require('body-parser');
const mongoose = require('mongoose');
//const myrout = require('./routes/noteroutes');

const app = express();

app.use(bodyprs.urlencoded({ extended: true }));

app.use(bodyprs.json());
app.use(require('./routes/noteroutes'));

app.use((req, res) => {
  res.send('here is the unknown request');
});

const port = process.env.PORT || 27017;

mongoose.connect(
  'mongodb+srv://abhinav:abhinav@cluster0-mqtyb.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  () => {
    console.log('DB connected');
    app.listen(port, () => console.log(`app is listening at ${port}`));
  }
);
