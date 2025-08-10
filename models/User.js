const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  password: String,
  photo: String,
  education: [
    {
      degree: String,
      school: String,
      year: String,
    },
  ],
  experiences: [
    {
      title: String,
      company: String,
      location: String,
      startDate: String,
      endDate: String,
      current: Boolean,
      description: String,
    },
  ],
  skills: [String],
    isPremium: {
    type: Boolean,
    default: false,
  },
    subscriptionExpires: {
    type: Date,
    default: null,
  },
  template: { type: String, default: "classic" },
  font: { type: String, default: "Poppins" },
  color: { type: String, default: "blue" },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', userSchema);
