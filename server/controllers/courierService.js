import CourierService from "../models/CourierService.js";
import Request from "../models/Request.js";

export const getCourierServices = async (req, res) => {
  try {
    const courierServices = await CourierService.find();
    res.status(200).json(courierServices);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const getCourierService = async (req, res) => {
  try {
    const courierServiceID = req.params.id;
    const courierServices = await CourierService.findById(courierServiceID);
    res.status(200).json(courierServices);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const selectCourierService = async (req, res) => {
  try {
    const courierServiceID = req.params.id;
    const { requestId } = req.body;
    const {
      requestID,
      firstName,
      lastName,
      middleName,
      requestName,
      requestAdress,
      requestDate,
    } = await Request.findById(requestId);
    // console.log({
    //   requestID,
    //   firstName,
    //   lastName,
    //   middleName,
    //   requestAdress,
    //   requestDate,
    //   requestName,
    // });
    const courierService = await CourierService.findById(courierServiceID);
    courierService.requestPool.push({
      requestID,
      firstName,
      lastName,
      middleName,
      requestName,
      requestAdress,
      requestDate,
    });
    const updatedCourierService = await CourierService.findByIdAndUpdate(
      courierServiceID,
      courierService,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCourierService);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
