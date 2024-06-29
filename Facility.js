const mongoose = require('mongoose');

const FacilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  amenities: { type: [String], required: true },
  availability: { type: Boolean, default: true }
});

module.exports = mongoose.model('Facility', FacilitySchema);
