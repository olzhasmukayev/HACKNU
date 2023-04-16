import React, { useEffect, useState } from "react";
import styles from "./Payment.module.css";
import Button from "@mui/material/Button";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import { decode, encode } from "@googlemaps/polyline-codec";
import TextField from "@mui/material/TextField";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const computeRoutes = async (origin, destination) => {
  const API_KEY = "AIzaSyD-iUnnCzlz-eGSWYRJnfEvSA_lhg24CqU";

  try {
    const headers = {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask":
        "routes.duration,routes.distanceMeters,routes.polyline,routes.legs.polyline,routes.legs.steps.polyline",
    };

    const data = {
      origin: {
        address: origin,
      },
      destination: {
        address: destination,
      },
      travelMode: "DRIVE",
    };

    const response = await axios.post(
      "https://routes.googleapis.com/directions/v2:computeRoutes",
      data,
      { headers }
    );

    return response;
  } catch (error) {
    console.error(error); // handle the error here
  }
};

const Payment = () => {
  const [searchParams] = useSearchParams();
  const requestID = searchParams.get("requestID");
  const orderName = searchParams.get("orderName");
  const IIN = searchParams.get("IIN");
  const nameOld = searchParams.get("name");
  const surnameOld = searchParams.get("surname");
  const phoneNum = searchParams.get("phoneNum");
  const orderPlace = searchParams.get("orderPlace");
  const organizationCode = searchParams.get("organizationCode");
  const post = searchParams.get("post");
  const city = searchParams.get("city");
  const street = searchParams.get("street");
  const homeNum = searchParams.get("homeNum");
  const apartment = searchParams.get("apartment");
  const podezd = searchParams.get("podezd");
  const floor = searchParams.get("floor");
  const korpus = searchParams.get("korpus");
  const houseName = searchParams.get("houseName");
  const additionalInfo = searchParams.get("additionalInfo");

  const [name, setName] = React.useState(nameOld);
  const nameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const [surname, setSurname] = React.useState(surnameOld);
  const surnameChange = (event) => {
    setSurname(event.target.value);
    console.log(surname);
  };

  const [cardNum, setCardNum] = React.useState("");
  const cardNumnameChange = (event) => {
    setCardNum(event.target.value);
    console.log(cardNum);
  };

  const [date, setDate] = React.useState("");
  const dateChange = (event) => {
    const curDate = event.target.value;
    if (curDate.length > 5) return;
    if (curDate.length == 2)
      setDate(curDate.substring(0, 2) + "/" + curDate.substring(2));
    else setDate(curDate);
    console.log(date);
  };

  let origin = "г. Астана, Керей-Жанибек Хандар, 4/1";
  let destination = city + " " + street + " " + homeNum;

  console.log(destination);

  const [response, setResponse] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await computeRoutes(origin, destination);
      setResponse(response);
    }

    fetchData();
  }, []);

  console.log(response);

  const expTime = response.data?.routes[0]?.duration || "";
  console.log(expTime);

  const price = (+expTime.slice(0, -1) / 60).toFixed() * 60;

  const [cvv, setCvv] = React.useState("");
  const [tsons, setTsons] = React.useState([]);
  const cvvChange = (event) => {
    setCvv(event.target.value);
    console.log(cvv);
  };

  useEffect(() => {
    getTson();
  }, []);

  const getTson = async () => {
    const response = await axios.get("http://localhost:6001/tsons/");

    console.log(response.data);

    setTsons(response.data);
  };

  const data = {
    requestID: requestID,
    firstName: nameOld,
    middleName: surnameOld,
    lastName: surnameOld,
    requestName: orderName,
    requestAdress:
      city +
      " " +
      street +
      " " +
      homeNum +
      " " +
      apartment +
      " " +
      floor +
      " " +
      korpus +
      " " +
      houseName +
      " " +
      additionalInfo,
    courierService: post,
    tson: tson,
  };

  const handleSubmit = async () => {
    console.log(data);

    const response = axios.post("http://localhost:6001/request/create", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.intoText}>Оплата</p>
          <p
            className={styles.intoText}
            style={{ marginTop: "10px", fontSize: "1.5rem" }}
          >
            {price} ₸
          </p>
        </div>
        <div className={styles.action}>
          <div className={styles.input}>
            <div className={styles.left}>
              <TextField
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                value={name}
                onChange={nameChange}
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                }}
              />
            </div>
            <div className={styles.right}>
              <TextField
                id="outlined-basic"
                label="Фамилия"
                variant="outlined"
                value={surname}
                onChange={surnameChange}
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <TextField
            id="outlined-number"
            label="Номер карты"
            type="number"
            variant="outlined"
            value={cardNum}
            onChange={cardNumnameChange}
            sx={{
              marginBottom: "10px",
              width: "98%",
            }}
          />
          <div className={styles.input}>
            <div className={styles.left}>
              <TextField
                id="outlined-basic"
                label="ММ/ГГ"
                variant="outlined"
                value={date}
                onChange={dateChange}
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                }}
              />
            </div>
            <div className={styles.right}>
              <TextField
                id="filled-password-input"
                label="CVV"
                variant="outlined"
                type="password"
                value={cvv}
                onChange={cvvChange}
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#2E71FC" }}
              onClick={handleSubmit}
            >
              Оплатить 2000 ₸
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
