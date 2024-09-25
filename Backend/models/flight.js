// src/models/flight.js
const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true }
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
