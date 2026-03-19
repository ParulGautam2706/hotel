import express from "express";
import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

const router = express.Router();

// ✅ Get all bookings
router.get("/", async (_req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("hotel", "name location");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Create a booking
router.post("/", async (req, res) => {
  try {
    const { userId, hotelId, checkIn, checkOut } = req.body;

    const booking = new Booking({
      user: userId,
      hotel: hotelId,
      checkIn,
      checkOut,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Delete booking
router.delete("/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
