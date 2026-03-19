import express from "express";
import { getHotels } from "../controllers/hotelController.js";

const router = express.Router();

router.get("/", getHotels);
router.get("/explore", getHotels);

export default router;
