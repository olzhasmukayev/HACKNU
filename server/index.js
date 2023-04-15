import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import checkRoutes from "./routes/check.js";
import courierServicesRoutes from "./routes/courierService.js";
import requestRoutes from "./routes/request.js";
import courierRoutes from "./routes/courier.js";
import tsonRoutes from "./routes/tson.js";
// import adminRoutes from "./routes/admin.js";
// import teamRoutes from "./routes/team.js";
// import { register } from "./controllers/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Batya v zdaniy: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

app.use("/auth", authRoutes);
app.use("/check", checkRoutes);
app.use("/courierServices", courierServicesRoutes);
app.use("/request", requestRoutes);
app.use("/courier", courierRoutes);
app.use("/tsons", tsonRoutes);

// app.use("/admin", adminRoutes);
// app.use("/team", teamRoutes);
