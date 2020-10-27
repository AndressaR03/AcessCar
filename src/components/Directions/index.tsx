import React from 'react';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}: any ) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyAY16Bkbxcg1aJxiU-3jzS2kg5LgprpZMA"
        strokeWidth={3}
        strokeColor="#19cdce"
    />
);

export default Directions;