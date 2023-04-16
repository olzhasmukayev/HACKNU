import React, { useState } from "react";

function requests() {
  const [requests, setRequests] = useState([
    {
      requestID: "201944123",
      firstName: "Aibai",
      lastName: "Bekzhan",
      requestName: "Выдача справки о наличии либо отсутствии судимости",
      tson: {
        tsonName: "ИИС ЦОН",
        tsonAdress: "Астане, Керей-Жанибек Хандар, 4/1",
      },
      requestAdress: "Астане, Кабанбай Батыра, 53",
      requestTime: "2023-04-14T16:14:05.821+06:00",
    },
    {
      requestID: "201944123",
      firstName: "Aibai",
      lastName: "Bekzhan",
      requestName: "Выдача справки о наличии либо отсутствии судимости",
      tson: {
        tsonName: "ИИС ЦОН",
        tsonAdress: "Астане, Керей-Жанибек Хандар, 4/1",
      },
      requestAdress: "Астане, Кабанбай Батыра, 53",
      requestTime: "2023-04-14T16:14:05.821+06:00",
    },
    {
      requestID: "201944123",
      firstName: "Aibai",
      lastName: "Bekzhan",
      requestName: "Выдача справки о наличии либо отсутствии судимости",
      tson: {
        tsonName: "ИИС ЦОН",
        tsonAdress: "Астане, Керей-Жанибек Хандар, 4/1",
      },
      requestAdress: "Астане, Кабанбай Батыра, 53",
      requestTime: "2023-04-14T16:14:05.821+06:00",
    },
  ]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginTop: "30px" }}>Заказы</h1>
      <div
        style={{ marginTop: "100px", display: "flex", flexDirection: "row" }}
      >
        {requests.map((request) => (
          <>
            <div style={{ height: "50px", width: "500px", border: "solid" }}>
              {request.requestID}
              {request.firstName}
              {request.lastName}
              {request.requestName}
              {request.requestAdress}
              {request.requestTime}
            </div>
            <button>+</button>
            <button>-</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default requests;
