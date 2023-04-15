import Courier from "../models/Courier.js";
import CourierService from "../models/CourierService.js";

export const getCourier = async (req, res) => {
  try {
    const courierID = req.params.id;
    const courier = await Courier.findById(courierID);
    const courierService = await CourierService.findById(
      courier.courierServiceID
    );
    res.status(200).json({ courier, requestPool: courierService.requestPool });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
