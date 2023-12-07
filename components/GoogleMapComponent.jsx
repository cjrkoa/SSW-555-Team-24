import React from 'react';
import { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import {
  setKey,
  fromAddress,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";

const libraries = ['places'];
const axios = require("axios");

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};


const GoogleMapComponent = () => {
  const [loc, setLocation] = useState();
  const [Events, getEvents] = useState([]);

  useEffect(() => {
    if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            console.log(latitude);
            console.log(longitude);
            setLocation({ lat: latitude, lng: longitude });
        })
    }
  }, []);

  useEffect(() => {
        axios.get("http://localhost:5000/events").then(res => {
          const locations = [];
          const events = res.data;
          console.log(res.data[0]['location']);
          setKey("AIzaSyCYhjWnb2yRicmjTn1kR2HWUks6ifVmXMo");
          for(const event of events){
            if(event['location'] != "Online" && event['location'] != "Zoom"){
              fromAddress(event['location'])
              .then(({ results }) => {
                const { lat, lng } = results[0].geometry.location;
                locations.push({lat, lng});
                console.log(lat, lng);
              })
              .catch(console.error);
              
            }
          }
          getEvents(locations);
          console.log(locations);
        });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCYhjWnb2yRicmjTn1kR2HWUks6ifVmXMo',
    libraries,
  });
  const markers = Events.map((latlng) => <MarkerF position={latlng} />);
  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Google Maps</div>;
  
  return (
    <h1>
      {Events}
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={loc}
      zoom={12}
    >{markers}
      
      
    </GoogleMap>
    </h1>
  );
};

export default GoogleMapComponent;
