import { icon, LatLngLiteral } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import s from "./styles.module.scss";

export const AppMap = ({ lat, lng }: Partial<LatLngLiteral>) => {
  return (
    <MapContainer
      className={s.map}
      center={[lat ?? 0, lng ?? 0]}
      zoom={lat && lng ? 16 : 2}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lat && lng && (
        <Marker
          position={[lat, lng]}
          icon={icon({ iconUrl: "./icon-location.svg" })}
        ></Marker>
      )}
    </MapContainer>
  );
};
