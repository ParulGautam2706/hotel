import Hotel from "../models/Hotel.js";

export const getHotels = async (_req, res) => {
  try {
    const hotels = await Hotel.find().sort({ createdAt: -1 });
    res.json(hotels);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
