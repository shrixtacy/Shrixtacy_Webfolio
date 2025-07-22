import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  userAgent: {
    type: String
  }
});

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;