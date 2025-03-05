const mongoose = require("mongoose");
const Appointment = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    nbCouvert: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", Appointment);
