const mangoose = require('mangoose');

const { Schema } = mangoose;

const requiredString = { type: String, required: true };

const requiredNumber = {
  type: Number,
  required: true,
};
const defaultDate = { type: Date, default: Date.now, required: true };
const logEntrySchema = new Schema({
  title: requiredString,
  description: String,
  comments: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
      created_at: defaultDate,
      updated_at: defaultDate,
      visitDate: {
        required: true,
        type: Date,
      },
    }, { timestamps: true });

const LogEntry = mangoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
