import 'dotenv/config.js';
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Hotel from "../models/Hotel.js";

const run = async () => {
  try {
    await connectDB();
    const count = await Hotel.countDocuments();
    if (count > 0) {
      console.log("ℹ Hotels already present:", count);
    } else {
      await Hotel.insertMany([
        { name: "Ocean View Resort", location: "Goa", description: "Beachside resort", price: 4200, rating: 4.5, images: [] },
        { name: "Mountain Nest", location: "Manali", description: "Hillside stay", price: 3500, rating: 4.3, images: [] },
        { name: "City Lights Hotel", location: "Delhi", description: "Business hotel", price: 2800, rating: 4.0, images: [] }
      ]);
      console.log("✅ Sample hotels inserted");
    }
  } catch (e) {
    console.error("❌ Seed hotels error:", e.message);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

run();
