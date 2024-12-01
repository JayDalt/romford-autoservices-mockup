import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 51.5724,  // Latitude for 55 Brentwood Rd, Hornchurch
  lng: 0.2201    // Longitude for 55 Brentwood Rd, Hornchurch
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCSgOPtKspEsyxkI7ZKW80ssQ1I1z0jJPw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;