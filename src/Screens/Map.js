// import React, { useState, useCallback, memo } from 'react';
// // Component.
// import Header from '../Component/Header';
// import Footer from '../Component/Footer';

// const containerStyle = { width: '400px', height: '400px' };
// const center = { lat: -3.745, lng: -38.523 };

// const Map = () => {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "YOUR_API_KEY"
//     })
//     const [map, setMap] = useState(null)
//     const onLoad = useCallback(function callback(map) {
//         // This is just an example of getting and using the map instance!!! don't just blindly copy!
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);
//         setMap(map)
//     }, [])

//     const onUnmount = useCallback(function callback(map) {
//         setMap(null)
//     }, [])

//     return isLoaded ? (
//         <>
//             <Header />
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//                 onLoad={onLoad}
//                 onUnmount={onUnmount}
//             >
//                 <div>hello</div>
//             </GoogleMap>
//             <Footer />
//         </>
//     ) : <></>
// }

// export default memo(Map);






























// import React from 'react';
// import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';

// const MapContainer = () => {
//     const mapStyles = {
//         height: '400px',
//         width: '100%',
//     };


//     // Inside your React component
// const checkGeofence = () => {
//     // Get user's current location
//     navigator.geolocation.getCuarrentPosition((position) => {
//       const userLocation = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude,
//       };

//       // Check if user's location is inside the geofence polygon
//       const isInsideGeofence = google.maps.geometry.poly.containsLocation(
//         userLocation,
//         yourPolygon // Reference to your polygon object
//       );

//       if (isInsideGeofence) {
//         // User is inside the geofence, perform your desired action
//         console.log('User is inside the geofence');
//       } else {
//         // User is outside the geofence
//         console.log('User is outside the geofence');
//       }
//     });
//   };



//     return (
//         // <LoadScript googleMapsApiKey="YOUR_API_KEY">
//             <GoogleMap
//                 mapContainerStyle={mapStyles}
//                 zoom={12}
//                 center={{ lat: 37.7749, lng: -122.4194 }} // Set your initial map center
//             >
//                 {/* Add Markers or Polygons for Geofencing */}
//                 <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
//                 <Polygon
//                     paths={[
//                         { lat: 37.7749, lng: -122.4194 },
//                         // Add more points to define your geofence polygon
//                     ]}
//                 />
//             </GoogleMap>
//         {/* </LoadScript> */}
//     );
// };

// export default MapContainer;


































import React from 'react';
import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {
        height: '400px',
        width: '100%',
    };

    // Inside your React component
    const checkGeofence = () => {
        // Get user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            // Check if user's location is inside the geofence polygon
            // You should define yourPolygon here
            // const isInsideGeofence = google.maps.geometry.poly.containsLocation(
            //   userLocation,
            //   yourPolygon // Reference to your polygon object
            // );

            // Perform your geofencing logic here
            // if (isInsideGeofence) {
            //   // User is inside the geofence, perform your desired action
            //   console.log('User is inside the geofence');
            // } else {
            //   // User is outside the geofence
            //   console.log('User is outside the geofence');
            // }
        });
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={{ lat: 37.7749, lng: -122.4194 }} // Set your initial map center
            >
                {/* Add Markers or Polygons for Geofencing */}
                <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
                <Polygon
                    paths={[
                        { lat: 37.7749, lng: -122.4194 },
                        // Add more points to define your geofence polygon
                    ]}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;
