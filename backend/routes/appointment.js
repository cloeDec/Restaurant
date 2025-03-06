const express = require("express");
const Appointment = require("../model/Appointment");
const router = express.Router();
const authenticate = require("../middleware/auth");

router.post("/create", authenticate, async (req, res) => {
  const { startDate, endDate, nbCouvert } = req.body;
  const user = req.user.id;

  console.log(req.user);

  const newAppointment = new Appointment({
    user,
    startDate,
    endDate,
    nbCouvert,
  });
  try {
    await newAppointment.save();
    res.status(200).send("Appointment created successfully");
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/user", authenticate, async (req, res) => {
  try {
    const appointments = await Appointment.find({ id: req.id });
    console.log(`Found appointments: ${appointments}`);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
});

module.exports = router;
