import mongoose from "mongoose";

const CourierSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  courierServiceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourierService",
    required: true,
  },
  currentRequestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "request",
    required: false,
  },
  path: {
    type: String,
    required: false,
  },
  currentLocation: {
    longitude: {
      type: Number,
      required: false,
    },
    latitude: {
      type: Number,
      required: false,
    },
  },
  available: {
    type: Boolean,
    required: true,
  },
});

const Courier = mongoose.model("Courier", CourierSchema);
export default Courier;
