import 'dotenv/config.js';
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import User from "../models/User.js";

const run = async () => {
  try {
    await connectDB();
    const email = process.env.ADMIN_EMAIL || "admin@1234.com";
    const password = process.env.ADMIN_PASSWORD || "Admin@123";
    const name = process.env.ADMIN_NAME || "Admin";

    let user = await User.findOne({ email });
    if (user) {
      console.log("ℹ️ Admin already exists:", email);
    } else {
      const hashed = await bcrypt.hash(password, 10);
      user = await User.create({ name, email, password: hashed, role: "admin" });
      console.log(" Admin created:", email);
    }
  } catch (e) {
    console.error("❌ Seed admin error:", e.message);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

run();
