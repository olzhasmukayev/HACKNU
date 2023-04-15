import Tson from "../models/Tson.js";

export const getTsons = async (req, res) => {
  try {
    let tsons = await Tson.find();

    res.status(200).json(tsons);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
