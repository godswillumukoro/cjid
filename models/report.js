const mongoose = require('mongoose');

const { Schema } = mongoose;

const reportsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Report = mongoose.model('Report', reportsSchema);
module.exports = Report;
