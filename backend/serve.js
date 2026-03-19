import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import connectDB from "./src/config/db.js";
import { protect, adminOnly } from "./src/middleware/authMiddleware.js";

// Import routes
import authRoutes from "./src/routes/auth.js";
import userRoutes from "./src/routes/users.js";
import bookingRoutes from "./src/routes/bookings.js";
import roomRoutes from "./src/routes/rooms.js";
import adminRoutes from "./src/routes/admin.js";

dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ===== API Routes =====
app.use("/api/auth", authRoutes);
app.use("/api/users", protect, userRoutes);
app.use("/api/bookings", protect, bookingRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/admin", protect, adminOnly, adminRoutes);

// ✅ Serve static frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Profile API (for your profile.html fetch)
app.get("/api/profile", protect, (req, res) => {
  // req.user is usually set by your authMiddleware.js
  res.json({
    name: req.user.name,
    email: req.user.email,
  });
});

// ✅ Logout API
app.post("/logout", (req, res) => {
  // If you’re using JWT → just clear token on frontend
  // If using sessions → destroy session
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// ===== Fallback: serve index.html for unknown routes =====
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ===== Start Server =====
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
