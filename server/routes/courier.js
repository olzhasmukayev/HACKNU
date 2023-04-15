import express from "express";
import { getCourier, getLocationCourier } from "../controllers/courier.js";

const router = express.Router();

router.get("/:id", getCourier);
router.post("/:id&:one&:two", getLocationCourier);

export default router;
