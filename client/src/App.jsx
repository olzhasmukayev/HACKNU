import { Route, Routes, useParams } from "react-router-dom";
import Courier from "./pages/Courier/Courier";
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";
import SMSAuth from "./pages/SMSAuth/SMSAuth";
import CourierPage from "./pages/CourierPage/CourierPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Courier" element={<Courier />}>
          <Route path=":requestID" element={<Courier />} />
        </Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/SMSAuth" element={<SMSAuth />}>
          <Route path=":requestID" element={<SMSAuth />} />
        </Route>
        <Route path="/CourierPage" element={<CourierPage />} />
      </Routes>
    </>
  );
};

export default App;
