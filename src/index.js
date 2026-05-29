import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";


dotenv.config();
await connectDB();
 
const app = express();   // ✅ must come first before app.use
app.use(cors());
app.use(express.json());

// ES module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static frontend files
app.use(express.static(path.join(__dirname, "../public")));


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

// Default route
app.get("/", (_req, res) => {
  res.send("✅ API is running");
});
// Serve pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "login.html"));
});

app.get("/explore", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "explore.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "admin.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "dashboard.html"));
});

const PORT = process.env.PORT || 800;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
