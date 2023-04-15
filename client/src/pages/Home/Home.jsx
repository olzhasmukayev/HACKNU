import React, { memo } from "react";
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

const Home = memo(() => {
  const [post, setPost] = useState("");

  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const [phone, setPhone] = React.useState("+77762282426");

  const phoneChange = (newPhone) => {
    setPhone(newPhone);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.intoText}>Здравствуйте Кайрат Нуртас!</p>
        </div>
        <div className={styles.action}>
          <div className={styles.input}>
            <div className={styles.inputID}>
              <FormControl fullWidth>
                <div className={styles.labelUp}>
                  <p style={{ marginBottom: "15px" }}>Данные Получателя </p>
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Область"
                    variant="outlined"
                    multiline
                    sx={{
                      marginBottom: "10px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className={styles.labelUp}>
                  <p style={{ marginBottom: "15px" }}>Данные Получателя </p>
                </div>
                <div>
                  <div>
                    <MuiTelInput
                      value={phone}
                      onChange={phoneChange}
                      sx={{ width: "100%", marginBottom: "10px" }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Область"
                      variant="outlined"
                      multiline
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
                <FormControl fullWidth>
                  <div>
                    <InputLabel id="demo-simple-select-label">
                      Курьерская Служба
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={post}
                      label="Курьерская Служба"
                      onChange={handleChange}
                      sx={{
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    >
                      <MenuItem value={10}>Kaspi Доставка</MenuItem>
                      <MenuItem value={20}>Pony Express</MenuItem>
                      <MenuItem value={30}>Exline</MenuItem>
                      <MenuItem value={40}>СДЭК</MenuItem>
                    </Select>
                  </div>
                </FormControl>
                <div className={styles.labelUp}>
                  <p style={{ marginBottom: "15px" }}>Адрес Доставки </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className={styles.left}>
                    <TextField
                      id="outlined-basic"
                      label="Область"
                      variant="outlined"
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Город"
                      variant="outlined"
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Улица"
                      variant="outlined"
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Номер дома"
                      variant="outlined"
                      multiline
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Квартира"
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
                      multiline
                      sx={{
                        marginBottom: "10px",
                        display: "flex",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Этаж"
                      multiline
                      variant="outlined"
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Корпус"
                      multiline
                      variant="outlined"
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Наименование ЖК"
                      multiline
                      variant="outlined"
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      multiline
                      label="Дополнительная информация"
                      variant="outlined"
                      sx={{
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Вы Представитель?"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </div>
              </FormControl>
            </div>
          </div>
          <div className={styles.button}>
            <Button variant="contained">Продолжить</Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
