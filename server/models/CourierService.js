import mongoose from "mongoose";

const CourierServiceSchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: true,
  },
  couriers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courier",
      required: false,
    },
  ],
  availableCouriers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courier",
      required: false,
    },
  ],
  requestPool: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Request",
        required: false,
      },
      requestID: {
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
      middleName: {
        type: String,
        required: true,
      },
      requestName: {
        type: String,
        required: true,
      },
      requestAdress: {
        type: String,
        required: true,
      },
      requestDate: {
        type: Date,
        required: true,
      },
    },
  ],
});

const CourierService = mongoose.model("CourierService", CourierServiceSchema);
export default CourierService;
