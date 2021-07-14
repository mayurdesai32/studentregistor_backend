require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const router = require('./routes/studentRoute');
const ErrorHandler = require('./middleware/errorHandler');
// connecting to database
connectDB();

// for testing
app.get('/', (req, res) => {
  res.send('api running');
});

// middleware
app.use(express.json());
// routes
app.use('/api/v1/student', router);

//  to handle Error
app.use(ErrorHandler);

// creating server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
