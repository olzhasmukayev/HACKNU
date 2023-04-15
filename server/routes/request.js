import express from "express";
import { createRequest } from "../controllers/request.js";

const router = express.Router();

router.post("/create", createRequest);

export default router;
