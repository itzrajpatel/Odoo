const stripe = require('stripe')('your_stripe_secret_key');
const Booking = require('../models/Booking');

exports.makePayment = async (req, res) => {
  try {
    const { amount, bookingId, token } = req.body;
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token,
      description: `Payment for booking ID: ${bookingId}`,
    });

    const booking = await Booking.findById(bookingId);
    booking.paymentStatus = 'Paid';
    await booking.save();

    res.status(200).send({ message: 'Payment successful', charge });
  } catch (error) {
    res.status(500).send({ error: 'Error processing payment' });
  }
};
