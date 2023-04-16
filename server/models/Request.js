import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
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
  optionalFirstName: {
    type: String,
    required: false,
  },
  optionalLastName: {
    type: String,
    required: false,
  },
  optionalMiddleName: {
    type: String,
    required: false,
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
  courier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courier",
    required: false,
  },
  courierService: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourierService",
    required: true,
  },
  tson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tson",
    required: true,
  },
});

const Request = mongoose.model("Request", RequestSchema);
export default Request;
