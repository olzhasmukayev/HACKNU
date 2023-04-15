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
export const selectCourierService = async (req, res) => {
  try {
    const courierServiceID = req.params.id;
    const { requestID } = req.body;
    const request = await Request.findById(requestID);
    const courierService = await CourierService.findById(courierServiceID);
    courierService.requestPool.push(request);
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
