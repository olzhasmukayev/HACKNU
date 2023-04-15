import express from "express";
import {
  loginCourierService,
  registerCourierService,
  loginCourier,
  registerCourier,
  loginTson,
  registerTson,
  loginAdmin,
  registerAdmin,
} from "../controllers/auth.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.post("/loginCourierService", loginCourierService);
router.post("/registerCourierService/:id", verifyToken, registerCourierService);
router.post("/loginCourier", loginCourier);
router.post("/registerCourier/:id", verifyToken, registerCourier);
router.post("/loginTson", loginTson);
router.post("/registerTson/:id", verifyToken, registerTson);
router.post("/loginAdmin", loginAdmin);
router.post("/registerAdmin", registerAdmin);
export default router;
