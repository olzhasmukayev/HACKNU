import express from "express";
import {
  getCourierServices,
  selectCourierService,
} from "../controllers/courierService.js";

const router = express.Router();

router.get("/", getCourierServices);
router.post("/:id", selectCourierService);

export default router;
