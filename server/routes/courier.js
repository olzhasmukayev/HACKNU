import express from "express";
import {
  getCourier,
  getLocationCourier,
  courierSelectedTask,
} from "../controllers/courier.js";

const router = express.Router();

router.get("/:id", getCourier);
router.post("/:id", courierSelectedTask);
router.post("/:id&:one&:two", getLocationCourier);

export default router;
