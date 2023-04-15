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

export const getLocationCourier = async (req, res) => {
  try {
    const courierID = req.params.id;
    const latitude = req.params.one;
    const longitude = req.params.two;
    // console.log(courierID);
    // console.log(latitude);
    // console.log(longitude);
    const courier = await Courier.findById(courierID);
    courier.currentLocation.latitude = latitude;
    courier.currentLocation.longitude = longitude;
    const updatedCourier = await Courier.findByIdAndUpdate(courierID, courier, {
      new: true,
    });
    res.status(200).json({ updatedCourier });
    // res.status(200).json();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const courierSelectedTask = async (req, res) => {
  try {
    const courierID = req.params.id;
    const { requestID } = req.body;
    const courier = await Courier.findById(courierID);
    const courierService = await CourierService.findById(
      courier.courierServiceID
    );

    res.status(200).json({ courier, courierService });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
