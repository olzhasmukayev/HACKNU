import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CourierService from "../models/CourierService.js";
import Courier from "../models/Courier.js";
import Tson from "../models/Tson.js";
import Admin from "../models/Admin.js";

export const registerCourierService = async (req, res) => {
  try {
    const userID = req.params.id;
    const admin = await Admin.findById(userID);
    if (!admin) {
      return res.status(400).json({ message: "Ты не админ" });
    }
    const { login, password, name } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordhash = await bcrypt.hash(password, salt);
    const newCourierService = await new CourierService({
      role: "CourierService",
      login,
      password: passwordhash,
      name,
    });
    const savedCourierService = await newCourierService.save();
    res.status(201).json(savedCourierService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginCourierService = async (req, res) => {
  try {
    const { login, password } = req.body;
    const courierService = await CourierService.findOne({ login });
    if (!courierService) {
      return res.status(400).json({ message: "Ондай сервис жокко брат" });
    }
    const isMatch = await bcrypt.compare(password, courierService.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Пароль қате бартишка" });
    }
    const token = jwt.sign({ id: courierService._id }, process.env.JWT_SECRET);
    delete courierService.password;
    res.status(200).json({ token, courierService });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const registerCourier = async (req, res) => {
  try {
    const userID = req.params.id;
    const admin = await Admin.findById(userID);
    if (!admin) {
      return res.status(400).json({ message: "Ты не админ" });
    }
    const { login, password, firstName, lastName, courierServiceID } = req.body;
    const courierService = await CourierService.findById(courierServiceID);
    // console.log(courierService);
    if (!courierService) {
      return res.status(400).json({ message: "Ондай сервис жокко брат" });
    }
    const salt = await bcrypt.genSalt();
    const passwordhash = await bcrypt.hash(password, salt);
    const newCourier = await new Courier({
      role: "Courier",
      login,
      password: passwordhash,
      firstName,
      lastName,
      courierServiceID,
      available: true,
    });

    const savedCourier = await newCourier.save();
    courierService.couriers.push(String(savedCourier._id));
    courierService.availableCouriers.push(String(savedCourier._id));
    const updatedCourierService = await CourierService.findByIdAndUpdate(
      courierServiceID,
      courierService,
      { new: true }
    );
    res.status(201).json({ savedCourier, updatedCourierService });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginCourier = async (req, res) => {
  try {
    const { login, password } = req.body;
    const courier = await Courier.findOne({ login });
    if (!courier) {
      return res.status(400).json({ message: "Ондай курьер жокко брат" });
    }
    const isMatch = await bcrypt.compare(password, courier.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Пароль қате бартишка" });
    }
    const token = jwt.sign({ id: courier._id }, process.env.JWT_SECRET);
    delete courier.password;
    res.status(200).json({ token, courier });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const registerTson = async (req, res) => {
  try {
    const userID = req.params.id;
    const admin = await Admin.findById(userID);
    if (!admin) {
      return res.status(400).json({ message: "Ты не админ" });
    }
    const { login, password, location, code, name } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordhash = await bcrypt.hash(password, salt);
    const newTson = await new Tson({
      role: "Tson",
      login,
      password: passwordhash,
      location,
      code,
      name,
    });
    const savedTson = await newTson.save();
    res.status(201).json(savedTson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginTson = async (req, res) => {
  try {
    const { login, password } = req.body;
    const tson = await Tson.findOne({ login });
    if (!tson) {
      return res.status(400).json({ message: "Ондай цон жокко брат" });
    }
    const isMatch = await bcrypt.compare(password, tson.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Пароль қате бартишка" });
    }
    const token = jwt.sign({ id: tson._id }, process.env.JWT_SECRET);
    delete tson.password;
    res.status(200).json({ token, tson });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const registerAdmin = async (req, res) => {
  try {
    const { login, password } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordhash = await bcrypt.hash(password, salt);
    const newAdmin = await new Admin({
      role: "Admin",
      login,
      password: passwordhash,
    });
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { login, password } = req.body;
    const admin = await Admin.findOne({ login });
    if (!admin) {
      return res.status(400).json({ message: "Ондай цон жокко брат" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Пароль қате бартишка" });
    }
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
    delete admin.password;
    res.status(200).json({ token, admin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
