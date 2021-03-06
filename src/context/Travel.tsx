
import React, {  createContext, useState, useContext} from "react";
import useAsyncStore from '@react-native-community/async-storage';
import Api from '../services/api'

interface Idestination{
    latitude: any,
    longitude: any,
    title: any
}


interface Idriverlocation{
 latitude: any,
 longitude: any,
 latitudeDelta: any,
} 

interface Icar{
    placa: string,
    Carro: string,
    Cor: string 
}

interface ITravelContext{
    price: any,
    setPrice:any,
    destination:Idestination | null,
    setDestination:any,
    passageiroID:any,
    setPassageiroID:any,
    carro:Icar | null, 
    setCarro:any,
    driver:any,
    setDriver:any,
    origem:Idestination | null, 
    setOrigem:any,
    travel_cod:any,
    setTravel_cod:any,
    confirmation:any,
    setConfirmation:any,
    time: number,
    setTime:any,  
    driverlocation: Idriverlocation | null;
    setdriverlocation:any,
    time_chegada: any,
    setTimeChegada:any
    paymethod:string,
    setpaymethod: any
    cancel: boolean;
    setCancel: any;
    dados: any;
    PegarViagens(): Promise<void>;
     
};

export const TravelContext =  createContext<ITravelContext>( {} as ITravelContext );

export function TravelProvider({ children }:any) {
    const [price, setPrice] = useState(0.0);
    const [destination, setDestination] = useState<Idestination | null>(null);
    const [passageiroID, setPassageiroID] = useState<any>(null);
    const [carro, setCarro] = useState<any>(null);
    const [driver, setDriver] = useState<any>(null);
    const [origem, setOrigem] = useState<Idestination | null>(null);
    const [travel_cod, setTravel_cod] = useState<any>(null);
    const [confirmation, setConfirmation] = useState(false);
    const [time, setTime] = useState<number>(0);
    const [driverlocation, setdriverlocation] = useState<any>(null);
    const [time_chegada,  setTimeChegada] = useState(0);
    const [paymethod, setpaymethod] = useState('Dinheiro');
    const [motoristaID, setMotoristaID ] = useState<any>(null);
    const [cancel, setCancel] = useState(false);
    const [dados, setDados] = useState<any>(null);

    async function PegarViagens() {
        try {
          let viagem_ =  await Api.getViagens(setDados);
        } catch (error) {
            alert('errro ao carregar as viagens')
        }
    }
    

    return (
        <TravelContext.Provider value={{price, setPrice,
            destination, setDestination,
            passageiroID, setPassageiroID,
            carro, setCarro,driver, setDriver,
            origem, setOrigem, travel_cod, setTravel_cod, confirmation, setConfirmation,
            time, setTime, driverlocation, setdriverlocation, time_chegada,  setTimeChegada, paymethod, setpaymethod
            ,cancel, setCancel, dados, PegarViagens}}>
            {children}
        </TravelContext.Provider>
    );
}

export default TravelContext;



















