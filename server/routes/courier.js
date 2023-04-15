import express from "express";
import {
  getCourier,
  getLocationCourier,
  courierSelectedTask,
  courierFinishedTask,
} from "../controllers/courier.js";

const router = express.Router();

router.get("/:id", getCourier);
router.post("/selected/:id", courierSelectedTask);
router.post("/finished/:id", courierFinishedTask);
router.post("/:id&:one&:two", getLocationCourier);

export default router;
