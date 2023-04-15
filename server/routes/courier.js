import express from "express";
import { getCourier } from "../controllers/courier.js";

const router = express.Router();

router.get("/:id", getCourier);

export default router;
