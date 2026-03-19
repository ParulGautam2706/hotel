import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    images: [{ type: String }]
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
