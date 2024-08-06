const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour name is required'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'Tour duration is required'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Tour group size is required'],
  },
  difficulty: {
    type: String,
    required: [true, 'Tour difficulty is required'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'Tour summary is required'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'Tour image is required'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
  price: {
    type: Number,
    required: [true, 'Tour price is required'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
