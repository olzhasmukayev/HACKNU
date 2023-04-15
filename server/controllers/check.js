import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

export const checkIIN = async (req, res) => {
  try {
    const requestID = req.params.one;
    const IIN = req.params.two;
    await axios
      .get(
        `http://89.218.80.61/vshep-api/con-sync-service?requestId=${requestID}&requestIIN=${IIN}&token=eyJG6943LMReKj_kqdAVrAiPbpRloAfE1fqp0eVAJ-IChQcV-kv3gW-gBAzWztBEdFY`
      )
      .then((resp) => {
        // console.log(resp.data.status);
        res.status(201).json(resp.data);
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getIIN = async (req, res) => {
  try {
    const requestID = req.params.one;
    const IIN = req.params.two;
    console.log(IIN);
    const tsonData = await axios.get(
      `http://89.218.80.61/vshep-api/con-sync-service?requestId=${requestID}&requestIIN=${IIN}&token=eyJG6943LMReKj_kqdAVrAiPbpRloAfE1fqp0eVAJ-IChQcV-kv3gW-gBAzWztBEdFY`
    );
    const nameData = await axios.get(
      `http://hakaton-fl.gov4c.kz/api/persons/${IIN}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    const numberData = await axios.get(
      `http://hakaton.gov4c.kz/api/bmg/check/${IIN}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    //   .then((resp) => {
    //     console.log(resp.data);
    //     res
    //       .status(201)
    //       .json({
    //         lastName: resp.data.lastName,
    //         firstName: resp.data.firstName,
    //         middleName: resp.data.middleName,
    //       });
    //   });
    // console.log(nameData);
    res.status(201).json({
      tsonData: tsonData.data.data,
      lastName: nameData.data.lastName,
      firstName: nameData.data.firstName,
      middleName: nameData.data.middleName,
      //   lastName: nameData.data.lastName,
      //   firstName: nameData.data.firstName,
      //   middleName: nameData.data.middleName,
      //     tsonData: tsonData.data,
      phoneNumber: numberData.data.phone,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
