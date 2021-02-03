import React, { Component, useState } from 'react';
import Map from '../../components/Map'
import {VoiceProvider} from "../../context/Voice"

function Mapa(){
  
    return(
        <VoiceProvider>
            <Map/>
        </VoiceProvider>
    );
 }

export default Mapa;
