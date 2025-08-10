const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'BDT',
  },
  method: {
    type: String, // bKash, Nagad, Rocket
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed', 'cancelled'],
    default: 'pending',
  },
  subscriptionStart: {
    type: Date,
    default: Date.now,
  },
  subscriptionEnd: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);