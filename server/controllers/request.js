import Request from "../models/Request.js";
export const createRequest = async (req, res) => {
  try {
    const {
      requestID,
      firstName,
      lastName,
      middleName,
      requestName,
      requestAdress,
      courierService,
      tson,
    } = req.body;
    const newRequest = await new Request({
      requestID,
      firstName,
      lastName,
      middleName,
      requestName,
      requestAdress,
      courierService,
      tson,
      requestDate: new Date().toISOString(),
    });
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
