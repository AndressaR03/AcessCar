import React, { Component, useContext, useEffect, useState } from 'react';

import { View } from 'react-native';

import '../../image.ts'

import uberx from '../../img/uberx.png'

import { Container, TypeTitle, TypeDescription, TypeImage, CancelButton, CloseButton, RequestButtonText, TypeCarDescription} from './styles';

import {VoiceContext} from '../../context/Voice';
import {TravelContext} from '../../context/Travel';
import Driver from "../Driver"
import Directions from '../Directions';


function Travel( {distance, duration}:any){

    const useVoice = useContext(VoiceContext);
    const useTravel = useContext(TravelContext);
    
    useEffect(() => {
     });

    
    return(
    <Container>
        <TypeTitle>Detalhes da sua viagem</TypeTitle>
        <View style = {{flex:1 , flexDirection: 'column', alignItems:"center"}}>
            <View style ={{flex: 3}}>
               <TypeCarDescription>Destino: {useTravel.destination?.title}</TypeCarDescription>
                <TypeCarDescription>Partida: {useTravel.origem}</TypeCarDescription>
                <TypeCarDescription>Tempo estimado: {useTravel.time} minutos</TypeCarDescription>
                <TypeCarDescription>Preço: R${useTravel.price.toFixed(2)}</TypeCarDescription>
                <TypeTitle>Procurando Motorista...</TypeTitle>
                <Driver></Driver>
            </View>
        </View>
    </Container>
);
}
export default Travel;