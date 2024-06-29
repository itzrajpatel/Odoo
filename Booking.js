const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  facilityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Facility', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  paymentStatus: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Booking', BookingSchema);
