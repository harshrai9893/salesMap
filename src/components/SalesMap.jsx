import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import salesPeople from "../data/salesPeople";

// Fix leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function SalesMap() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={5}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {salesPeople.map((person) => (
          <Marker
            key={person.id}
            position={[person.lat, person.lng]}
          >
            <Popup>
              <div>
                <h3>{person.name}</h3>
                <p>Latitude: {person.lat}</p>
                <p>Longitude: {person.lng}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default SalesMap;