const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteStruct = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Note', noteStruct);
