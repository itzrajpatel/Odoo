const Booking = require('../models/Booking');
const Facility = require('../models/Facility');

exports.bookFacility = async (req, res) => {
  try {
    const { userId, facilityId, date, time } = req.body;
    const facility = await Facility.findById(facilityId);
    if (!facility) return res.status(404).send({ error: 'Facility not found' });

    const booking = new Booking({ userId, facilityId, date, time });
    await booking.save();
    res.status(201).send({ message: 'Booking successful', booking });
  } catch (error) {
    res.status(500).send({ error: 'Error booking facility' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('facilityId').populate('userId');
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching bookings' });
  }
};
