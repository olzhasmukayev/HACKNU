import React from "react";
import styles from "./Payment.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Payment = () => {
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
                multiline
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
                multiline
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
            multiline
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
                multiline
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                }}
              />
            </div>
            <div className={styles.right}>
              <TextField
                id="outlined-number"
                label="CVV"
                variant="outlined"
                type="number"
                multiline
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
