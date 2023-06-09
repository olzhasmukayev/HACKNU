import React, { memo, useEffect } from "react";
import styles from "./Home.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { useSearchParams, useNavigate, createSearchParams } from "react-router-dom";
import axios from "axios";

const Home = memo(() => {
  const [searchParams] = useSearchParams();
  const requestID = searchParams.get("requestID");
  const orderName = searchParams.get("orderName");
  const IIN = searchParams.get("IIN");
  const name = searchParams.get("name");
  const surname = searchParams.get("surname");
  const phoneNum = "+" + searchParams.get("phoneNum");
  const orderPlace = searchParams.get("orderPlace");
  const organizationCode = searchParams.get("organizationCode");

  const [post, setPost] = useState("");
  const handlePostChange = (event) => {
    setPost(event.target.value);
    console.log(post);
  };

  const [phone, setPhone] = React.useState(phoneNum ? phoneNum : "");
  const phoneChange = (newPhone) => {
    setPhone(newPhone);
    console.log(phone);
  };

  const [region, setRegion] = React.useState("");
  const regionChange = (event) => {
    setRegion(event.target.value);
    console.log(region);
  };

  const [city, setCity] = React.useState("");
  const cityChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  const [street, setStreet] = React.useState("");
  const streetChange = (event) => {
    setStreet(event.target.value);
    console.log(street);
  };

  const [homeNum, setHomeNum] = React.useState("");
  const homeNumChange = (event) => {
    setHomeNum(event.target.value);
    console.log(homeNum);
  };

  const [apartment, setApartment] = React.useState("");
  const apartmentChange = (event) => {
    setApartment(event.target.value);
    console.log(apartment);
  };

  const [podezd, setPodezd] = React.useState("");
  const podezdChange = (event) => {
    setPodezd(event.target.value);
    console.log(podezd);
  };

  const [floor, setFloor] = React.useState("");
  const floorChange = (event) => {
    setFloor(event.target.value);
    console.log(floor);
  };

  const [korpus, setKorpus] = React.useState("");
  const korpusChange = (event) => {
    setKorpus(event.target.value);
    console.log(korpus);
  };

  const [houseName, setHouseName] = React.useState("");
  const houseNameChange = (event) => {
    setHouseName(event.target.value);
    console.log(houseName);
  };

  const [additionalInfo, setAdditionalInfo] = React.useState("");
  const additionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
    console.log(additionalInfo);
  };

  const [pred, setPred] = React.useState(false);
  const predChange = (event) => {
    setPred(!pred);
    console.log(pred);
  };

  const [predIIN, setPredIIN] = React.useState("");
  const predIINChange = (event) => {
    setPredIIN(event.target.value);
    console.log(predIIN);
  };

  const [check1, setCheck1] = React.useState(false);
  const check1Change = (event) => {
    setCheck1(!check1);
    console.log(check1);
  };

  const [check2, setCheck2] = React.useState(false);
  const check2Change = (event) => {
    setCheck2(!check2);
    console.log(check2);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (!(check1 && check2)) return;
    
    navigate({
      pathname: "/Payment",
      search: createSearchParams({
        IIN: IIN,
        requestID: requestID,
        orderName: orderName,
        orderPlace: orderPlace,
        organizationCode: organizationCode,
        name: name,
        surname: surname,
        phoneNum: phoneNum,
        post: post,
        region: region,
        city: city,
        street: street,
        homeNum: homeNum,
        apartment: apartment,
        podezd: podezd,
        floor: floor,
        korpus: korpus,
        houseName: houseName,
        additionalInfo: additionalInfo,
        pred: pred,
        predIIN: predIIN,
      }).toString(),
    });
  };

  const getCourierServices = async () => {
    const response = await axios.get("http://localhost:6001/courierServices/");
    console.log(response.data);

    return response.data;
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.intoText}>
            Здравствуйте {name} {surname}!
          </p>
        </div>
        <div className={styles.action}>
          <div className={styles.input}>
            <div className={styles.inputID}>
              <FormControl fullWidth>
                <div>
                  <div className={styles.labelUp}>
                    <p style={{ marginBottom: "15px" }}>Данные Заказа </p>
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Заказ №"
                      variant="outlined"
                      value={requestID ? requestID : ""}
                      InputLabelProps={{
                        readOnly: true,
                      }}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Наименование услуги"
                      variant="outlined"
                      value={orderName ? orderName : ""}
                      multiline
                      InputLabelProps={{
                        readOnly: true,
                      }}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Отделение"
                      variant="outlined"
                      value={"ИИС ЦОН"}
                      multiline
                      InputLabelProps={{
                        readOnly: true,
                      }}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div>
                    <div className={styles.labelUp}>
                      <p style={{ marginBottom: "15px" }}>Данные Получателя</p>
                    </div>
                    <TextField
                      id="outlined-basic"
                      label="ИИН"
                      variant="outlined"
                      value={IIN ? IIN : ""}
                      InputLabelProps={{
                        readOnly: true,
                      }}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Имя"
                      variant="outlined"
                      value={name ? name : ""}
                      InputLabelProps={{
                        readOnly: true,
                      }}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Фамилия"
                      variant="outlined"
                      value={surname ? surname : ""}
                      InputLabelProps={{
                        readOnly: true,
                      }}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                    <MuiTelInput
                      label="Номер телефона"
                      value={'+77762282426'}
                      onChange={phoneChange}
                      sx={{ width: "100%", marginBottom: "10px" }}
                    />
                  </div>
                </div>
                <br></br>
                <FormControl fullWidth>
                  <div>
                    <InputLabel id="demo-simple-select-label">
                      Курьерская Служба
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={post}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      label="Курьерская Служба"
                      onChange={handlePostChange}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    >
                      <MenuItem value={"643ad8ec8fcf699e2f1f4607"}>Kaspi Доставка</MenuItem>
                      <MenuItem value={"643ad9048fcf699e2f1f460a"}>Pony Express</MenuItem>
                      <MenuItem value={"643ad9148fcf699e2f1f460d"}>Exline</MenuItem>
                      <MenuItem value={"643ad9298fcf699e2f1f4610"}>СДЭК</MenuItem>
                    </Select>
                  </div>
                </FormControl>
                <br></br>
                <div className={styles.labelUp}>
                  <p style={{ marginBottom: "15px" }}>Адрес Доставки </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className={styles.left}>
                    <TextField
                      id="outlined-basic"
                      label="Область"
                      variant="outlined"
                      value={region}
                      onChange={regionChange}
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Город"
                      variant="outlined"
                      value={city}
                      onChange={cityChange}
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Улица"
                      variant="outlined"
                      value={street}
                      onChange={streetChange}
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Номер дома"
                      variant="outlined"
                      value={homeNum}
                      onChange={homeNumChange}
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Квартира"
                      value={apartment}
                      onChange={apartmentChange}
                      multiline
                      variant="outlined"
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                  <div className={styles.right} style={{ marginLeft: "1%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Подъезд"
                      variant="outlined"
                      value={podezd}
                      onChange={podezdChange}
                      multiline
                      sx={{
                        marginBottom: "10px",
                        display: "flex",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Этаж"
                      variant="outlined"
                      value={floor}
                      onChange={floorChange}
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Корпус"
                      variant="outlined"
                      multiline
                      value={korpus}
                      onChange={korpusChange}
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Наименование ЖК"
                      variant="outlined"
                      value={houseName}
                      onChange={houseNameChange}
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Дополнительная информация"
                      variant="outlined"
                      value={additionalInfo}
                      onChange={additionalInfoChange}
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <FormControlLabel
                    control={<Checkbox checked={pred} onChange={predChange} />}
                    label="Представитель"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                  <br></br>
                  {pred ? (
                    <TextField
                      id="outlined-basic"
                      label="ИИН Представителя"
                      variant="outlined"
                      value={predIIN}
                      onChange={predIINChange}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div>
                  <br></br>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox checked={check1} onChange={check1Change} />
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                    <p>
                      - Я принимаю условия{" "}
                      <a target="_blank" href="https://egov.kz/cms/kk">
                        публичного договора-оферты
                      </a>
                    </p>
                  </Box>
                  <br></br>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox checked={check2} onChange={check2Change} />
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                    <p>
                      - Я ознакомлен и согласен с{" "}
                      <a target="_blank" href="https://egov.kz/cms/kk">
                        условиями политики конфиденциальности и персональных
                        данных
                      </a>
                    </p>
                  </Box>
                  <br></br>
                </div>
              </FormControl>
            </div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#2E71FC" }}
              disabled={!(check1 && check2)}
              onClick={handleSubmit}
            >
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
