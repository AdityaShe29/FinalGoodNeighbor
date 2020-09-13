import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import useSwr from "swr";
import '../../src/mapui.css';
import SidebarForm from './SidebarForm';

// existing imports + new import for SWR

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function App() {
    const [activePark, setActivePark] = React.useState(null);
    const url =
    "http://ptsv2.com/t/de0zy-1599963450/post";
  const { data, error } = useSwr(url, { fetcher });
  const crimes = data && !error ? data.slice(0, 100) : [];

  return (
    <Map center={[52.6376, -1.135171]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      

      {crimes.map(crime => (
        <Marker
          key={crime.key}
          position={[crime.latitude, crime.longitude]}
          onClick={() => {
            setActivePark(crime);
          }}
        />
      ))}

{activePark && (
    <Popup
      position={[
        activePark.latitude,
        activePark.longitude
      ]}
      onClose={() => {
        setActivePark(null);
      }}
    >
      <div>
        <h3 class = "random"><b>Name: </b>{activePark.user}</h3>
        <p2 class = "random1"><b>Request: </b>{activePark.request}</p2>
        <p3 class = "random1"><br></br><b>Urgency: </b>{activePark.due_date}</p3>
        <p3 class = "random1"><br></br><b>Email: </b>{activePark.email_address}</p3>
        <p3 class = "random1"><br></br><b>Phone: </b>{activePark.phone}</p3>
      </div>
    </Popup>
  )}

    </Map>
  );
}