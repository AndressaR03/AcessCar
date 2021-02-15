import React, { Component, useContext, useEffect, useState } from 'react';

import { View, ActivityIndicator} from 'react-native';

import '../../image.ts'

import uberx from '../../img/uberx.png'

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText, TypeCarDescription} from './styles';

import {VoiceContext} from '../../context/Voice';
import {TravelContext} from '../../context/Travel';


function Driver( {distance, duration}:any){

    const useTravel = useContext(TravelContext);
    const useVoice = useContext(VoiceContext);
    const [isLoading, setisLoading] = useState(true); 

    const driver = [{
        location: {latitude: -23.549868348761635,
                  longitude: -46.95342623688237, 
                  latitudeDelta: 0.0922, longitudeDelta: 0.0421},
        car: {placa: "PCX8952",
        Carro: "Onix",
        Cor: "Branco" },
        name: "Carlos"
    }]

    useEffect(() => { 
            const Load = async () => {
                const getLocation = await _getDriver();}
            setTimeout(()=>{Load()}, 2000);
      }, []);


    async function _getDriver(){
            useTravel.setDriver(driver[0].name);
            useTravel.setdriverlocation(driver[0].location);
            useTravel.setCarro(driver[0].car);
            setisLoading(false);
            useVoice.setisVisibleDriver(false);
    } 
  
    return(
    <Container>
        {isLoading && <ActivityIndicator size="large" color="#19cdce" />} 
    </Container>
);
}
export default Driver;