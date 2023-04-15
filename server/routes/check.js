import express from "express";
import { checkIIN, getIIN } from "../controllers/check.js";

const router = express.Router();

router.get("/iin/:one&:two", checkIIN);
router.get("/data/:one&:two", getIIN);
export default router;
