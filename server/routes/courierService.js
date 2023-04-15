import express from "express";
import {
  getCourierServices,
  selectCourierService,
  getCourierService,
} from "../controllers/courierService.js";

const router = express.Router();

router.get("/", getCourierServices);
router.get("/:id", getCourierService);
router.post("/:id", selectCourierService);

export default router;
