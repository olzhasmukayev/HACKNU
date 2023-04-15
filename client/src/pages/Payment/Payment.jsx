import React from "react";
import styles from "./Payment.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Payment = () => {
  const [name, setName] = React.useState("");
  const nameChange = (event) => { setName(event.target.value); console.log(name); };

  const [surname, setSurname] = React.useState("");
  const surnameChange = (event) => { setSurname(event.target.value); console.log(surname); };

  const [cardNum, setCardNum] = React.useState("");
  const cardNumnameChange = (event) => { setCardNum(event.target.value); console.log(cardNum); };

  const [date, setDate] = React.useState("");
  const dateChange = (event) => {
    const curDate = event.target.value;
    if (curDate.length > 5) return;
    if (curDate.length == 2)
      setDate(curDate.substring(0, 2) + "/" + curDate.substring(2));
    else setDate(curDate);
    console.log(date);
  };

  const [cvv, setCvv] = React.useState("");
  const cvvChange = (event) => { setCvv(event.target.value); console.log(cvv); };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.intoText}>Оплата</p>
          <p
            className={styles.intoText}
            style={{ marginTop: "10px", fontSize: "1.5rem" }}
          >
            2000 ₸
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
            <Button variant="contained" sx={{ backgroundColor: "#2E71FC" }}>
              Оплатить 2000 ₸
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
