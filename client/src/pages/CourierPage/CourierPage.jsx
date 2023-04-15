import Running from "../../assets/running.gif";
import { React, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Polyline, Marker } from "@react-google-maps/api";
import { decode, encode } from "@googlemaps/polyline-codec";
import styles from "./CourierPage.module.css";
import useWindowSize from "../../hooks/useWindowSize";
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

const MyComponent = () => {
  const [width, height] = useWindowSize();

  const [response, setResponse] = useState({});
  const [courierId, setCourierId] = useState(0);
  const [courierLat, setCourierLat] = useState(0);
  const [courierLng, setCourierLng] = useState(0);

  let origin = "г. Астана, Кабанбай батыр 53";
  let destination = "г. Астана, Хан шатыр";

  const getCoordinates = (position) => {
    setCourierLat(position.coords.latitude);
    setCourierLng(position.coords.longitude);
  }

  const sendCoordinates = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/courier/" + courierId + "&" + courierLat + "&" + courierLng,
    );
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await computeRoutes(origin, destination);
      setResponse(response);
    }

    fetchData();
  }, []);

  
  getLocation();

  console.log("courierLat: ", courierLat);
  console.log("courierLng: ", courierLng);

  console.log("response: ");
  console.log(response);

  const center = {
    lat: 0,
    lng: -180,
  };

  const encoded = response.data?.routes[0]?.polyline?.encodedPolyline || "";
  const expTime = response.data?.routes[0]?.duration || "";
  const decoded = decode(encoded);

  const onLoad = (polyline) => {
    console.log("polyline: ", polyline);
  };

  const path = [];

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1,
  };

  let sumLat = 0;
  let sumLng = 0;

  for (let i = 0; i < decoded.length; i++) {
    console.log(decoded[i][0], decoded[i][1]);
    path.push({ lat: decoded[i][0], lng: decoded[i][1] });
    sumLat += decoded[i][0];
    sumLng += decoded[i][1];
  }

  center.lat = sumLat / decoded.length;
  center.lng = sumLng / decoded.length;

  let zoom = 13;

  const mapContainerStyle = {
    height: height + "px",
    width: width > 700 ? width / 2 + "px" : width + "px",
  };
  return (
    <div className={styles.devider}>
      <div className={styles.leftInfo}>
        <div className={styles.mapInfo}>
          <div className={styles.wrap}>
            <div className={styles.docInfo}>
              <p>Документы в Пути!</p>
            </div>
            <div className={styles.docsTime}>
              <p>Примерное время ожидания</p>
              <p>{(+expTime.slice(0, -1) / 60).toFixed() + " мин"}</p>
            </div>
            <div className={styles.docAnimate}>
              <img className={styles.curAnime} src={Running} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <LoadScript googleMapsApiKey="AIzaSyD-iUnnCzlz-eGSWYRJnfEvSA_lhg24CqU">
          <GoogleMap
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={zoom}
            center={center}
          >
            <Polyline
              onLoad={onLoad}
              geodesic={true}
              path={path}
              options={options}
            />
            <Marker position={{ lat: courierLat, lng: courierLng }} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MyComponent;
