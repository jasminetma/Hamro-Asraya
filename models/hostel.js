const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
  id: String,
  name: String,
  location: String,
  description: String,
  monthlyRent: Number,
  facilities: [String],
  roomType: [String],
  gender: String,
  availableRooms: Number,
  images: [String],
  contact: {
    ownerName: String,
    phone: String,
    email: String,
  },
  ratings: Number,
  verified: Boolean,
});

module.exports = mongoose.model("Hostel", hostelSchema);