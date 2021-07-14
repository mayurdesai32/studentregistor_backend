const mongoose = require('mongoose');
const dbconnection =
  process.env.DATABASE_CONNECT || 'mongodb://localhost/student';
const connectDB = async () => {
  try {
    await mongoose.connect(dbconnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`connected to the database`);
  } catch (error) {
    console.log(`failed to connect the database`);
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
