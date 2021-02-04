import React from 'react';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}: any ) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="MAPS_API_KEY"
        strokeWidth={3}
        strokeColor="#19cdce"
    />
);

export default Directions;