import React, { Component, useState } from 'react';
import Map from '../../components/Map'
import {VoiceProvider} from "../../context/Voice"
import { TravelProvider} from "../../context/Travel"
function Mapa(){
  
    return(
        <TravelProvider>
        <VoiceProvider>
            <Map/>
        </VoiceProvider>
        </TravelProvider>
    );
 }

export default Mapa;
