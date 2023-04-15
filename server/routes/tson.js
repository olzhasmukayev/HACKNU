import express from "express";
import { getTsons } from "../controllers/tson.js";

const router = express.Router();

router.get("/", getTsons);

export default router;
