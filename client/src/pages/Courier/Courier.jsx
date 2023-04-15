import React from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import { decode, encode } from "@googlemaps/polyline-codec";
import styles from "./Courier.module.css";
import useWindowSize from "../../hooks/useWindowSize";

const center = {
  lat: 0,
  lng: -180,
};

const encoded =
  "skzvHieyrLuIoBek@eO_c@sK{Ae@sLwCqC_@sO{AqEi@eEa@}Fs@iMeAuHy@cTkBw@OaOaBMAyFdq@B|@o@|H{@c@sDgAAM";
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

const mapContainerStyle = {
  height: "400px",
  width: "600px",
};

const MyComponent = () => {
  const [width, height] = useWindowSize();

  let sumLat = 0;
  let sumLng = 0;

  for (let i = 0; i < decoded.length; i++) {
    path.push({ lat: decoded[i][0], lng: decoded[i][1] });
    sumLat += decoded[i][0];
    sumLng += decoded[i][1];
  }

  center.lat = sumLat / decoded.length;
  center.lng = sumLng / decoded.length;

  let zoom = 12;

  return (
    <div className={styles.container} style={{ width: "100%", height: "100%" }}>
      <LoadScript googleMapsApiKey="AIzaSyD-iUnnCzlz-eGSWYRJnfEvSA_lhg24CqU">
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={zoom}
          center={center}
        >
          <Polyline
            loop={false}
            onLoad={onLoad}
            geodesic={true}
            path={path}
            options={options}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(MyComponent);
