const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 8080

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));
app.use(logger('dev'));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/frozen-brook-31318", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
  }
);

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})