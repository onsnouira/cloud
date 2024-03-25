import React from "react";
import GoogleMapReact from 'google-map-react';


// MapContainers component displaying a Google Map with a marker at a specified location
function MapContainers(){
  // Define the location for the map
  const defaultProps = {
    center: {
      lat: 35.6054798,
      lng: 10.7876948
    },
    zoom: 11
  };

  return (
    <div style={{ height: '60vh', width: '80%', marginLeft:'10%' , marginTop :'5%',marginBottom :'90px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}
export default MapContainers