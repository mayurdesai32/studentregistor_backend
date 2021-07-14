const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter valid name'],
  },
  contact: {
    type: Number,
    required: [true, 'Enter 10 digit contact number'],
    minLength: [10, 'Enter number is less than 10 '],
    maxLength: [10, 'Enter number is more than 10'],
  },

  subject: {
    subjectname: {
      type: String,
      required: [true, 'Please enter valid subject'],
    },
    subjectname2: {
      type: String,
    },
    subjectname3: {
      type: String,
    },
    subjectname4: {
      type: String,
    },
    subjectname5: {
      type: String,
    },
  },

  class: {
    type: String,
    required: [true, 'Please enter valid class'],
  },
  societies: {
    type: String,
    enum: ['theatre', 'art', 'none'],
    default: 'none',
  },

  // year: {
  //   type: Date,
  //   required: [true, 'please enter vaild year'],
  //   // default:Date.now
  // },
  year: {
    type: String,
    enum: ['first', 'second', 'third', 'forth'],
    required: [true, 'please enter valid year'],
  },
});

const STUDENT = mongoose.model('student', studentSchema);
module.exports = STUDENT;
