import { Route, Routes } from "react-router-dom";
import Courier from "./pages/Courier/Courier";
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";
import SMSAuth from "./pages/SMSAuth/SMSAuth";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Courier" element={<Courier />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/SMSAuth" element={<SMSAuth />} />
      </Routes>
    </>
  );
};

export default App;
