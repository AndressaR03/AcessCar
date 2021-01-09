import React from 'react';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}: any ) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyBMafnS7Tw3QxAkaBQO0-V9DsueL3SjsxY"
        strokeWidth={3}
        strokeColor="#19cdce"
    />
);

export default Directions;