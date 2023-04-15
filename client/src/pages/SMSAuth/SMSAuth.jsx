import React from "react";
import styles from "./SMSAuth.module.css";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const SMSAuth = () => {
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
                disabled
                id="outlined-number"
                label="Номер Документа"
                type="number"
                value="2312425"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  marginBottom: "20px",
                  input: { color: "red" },
                }}
              />
              <TextField
                id="outlined-number"
                label="ИИН"
                type="number"
                size="small"
                placeholder="Введите ИИН..."
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className={styles.button}>
            <Button variant="contained" sx={{ backgroundColor: "#2E71FC" }}>
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSAuth;
