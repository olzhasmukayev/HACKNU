import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SMSAuth.module.css";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import leftImage from "../../assets/SMSAuthRight.png";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const handleSubmit = async (requestID, iin) => {
  let response1 = null;
  let response2 = null;
  let response3 = null;
  let response4 = null;
  let response5 = null;
  response1 = await axios.get(
    "http://localhost:6001/check/iin/" + requestID + "&" + iin,
    {
      signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
    }
  );
  if (response1) return response1;
  console.log(1);
  response2 = await axios.get(
    "http://localhost:6001/check/iin/" + requestID + "&" + iin,
    {
      signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
    }
  );
  if (response2) return response2;
  console.log(1);
  response3 = await axios.get(
    "http://localhost:6001/check/iin/" + requestID + "&" + iin,
    {
      signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
    }
  );
  console.log(1);
  if (response3) return response3;
  response4 = await axios.get(
    "http://localhost:6001/check/iin/" + requestID + "&" + iin,
    {
      signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
    }
  );
  if (response4) return response4;
  response5 = await axios.get(
    "http://localhost:6001/check/iin/" + requestID + "&" + iin,
    {
      signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
    }
  );
  if (response5) return response5;
  console.log(1);
  if (response1 || response2 || response3 || response4 || response5) {
    if (response1) return response1;
    if (response2) return response2;
    if (response3) return response3;
    if (response4) return response4;
    if (response5) return response5;
  } else {
    return handleSubmit(requestID, iin);
  }
};

const handleCheckSubmit = async (requestID, iin) => {
  let response1 = null;

  setTimeout(async () => {
    response1 = await axios.get(
      "http://localhost:6001/check/data/" + requestID + "&" + iin,
      {
        signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
      }
    );
  }, 100);

  response1 = await axios.get(
    "http://localhost:6001/check/data/" + requestID + "&" + iin,
    {
      signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
    }
  );

  if (response1) return response1;
  return response1;
};

const SMSAuth = () => {
  const navigate = useNavigate();

  let { requestID } = useParams();

  const [IIN, setIIN] = React.useState("");

  const navToHome = async () => {
    const response = await handleSubmit(requestID, IIN);
    console.log(response.data.data.resultCode);
    if (response.data.data.resultCode == "ERROR") {
      console.log(1);
      return;
    } else {
      console.log(123123);
      const resp = await handleCheckSubmit(requestID, IIN);
      console.log(resp);
      if (resp != null) {
        navigate({
          pathname: "/Home",
          search: createSearchParams({
            IIN: IIN,
            requestID: requestID,
            orderName: resp.data.tsonData.serviceType.nameRu,
            orderPlace: resp.data.tsonData.organization.nameRu,
            organizationCode: resp.data.tsonData.organization.code,
            name: resp.data.firstName,
            surname: resp.data.lastName,
            phoneNum: resp.data.phoneNumber,
          }).toString(),
        });
      }
    }
  };

  const onChangeHandler = (event) => {
    setIIN(event.target.value);
    console.log(IIN);
  };

  if (requestID != undefined) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <p className={styles.intoText}>Сервис Доставки Документов</p>
          </div>
          <div className={styles.action}>
            <div className={styles.input}>
              <div className={styles.inputID}>
                <TextField
                  id="outlined-number"
                  label="Номер Документа"
                  type="number"
                  value={requestID}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                    readOnly: true,
                  }}
                  sx={{
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  id="outlined-number"
                  label="ИИН"
                  type="number"
                  size="small"
                  value={IIN}
                  placeholder="Введите ИИН..."
                  onChange={onChangeHandler}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className={styles.button}>
              <Button
                variant="contained"
                onClick={navToHome}
                sx={{ backgroundColor: "#2E71FC" }}
              >
                Продолжить
              </Button>
            </div>
          </div>
        </div>
        {/* <div className={styles.leftImage}>
          <img src={leftImage} alt="" />
        </div> */}
      </div>
    );
  } else {
    <div className={styles.container}>Льзя</div>;
  }
};

export default SMSAuth;
