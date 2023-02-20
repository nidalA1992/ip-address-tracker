import { icon, LatLngLiteral } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

import s from "./styles.module.scss";

const Map = ({ lat, lng }: Partial<LatLngLiteral>) => {
  const map = useMap();

  if (lat && lng) {
    map.zoomIn(13);
    map.panTo({ lat, lng });
  }

  return null;
};

export const AppMap = ({ lat = 0, lng = 0 }: Partial<LatLngLiteral>) => {
  return (
    <MapContainer
      className={s.map}
      center={{ lat, lng }}
      zoom={2}
      scrollWheelZoom={true}
      zoomControl={false}
      zoomAnimation={true}
    >
      <Map lat={lat} lng={lng} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lat && lng && (
        <Marker
          position={{ lat, lng }}
          icon={icon({ iconUrl: "./icon-location.svg" })}
        ></Marker>
      )}
    </MapContainer>
  );
};
