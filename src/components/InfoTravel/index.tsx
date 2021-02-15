import React, { useRef, useEffect , useContext} from "react";
import { View, Button , Text, Alert} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Driver from '../Driver'
import {TravelContext} from '../../context/Travel';
import uberx from '../../img/uberx.png';
import '../../image.ts';
import { Container, 
  TypeCode,
  CodContainer,
  TypeDescription,
  TypeImage,
  CancelButton,
  RequestButtonText
} from './styles';
import {VoiceContext} from "../../context/Voice"


export default function InfoTravel() {
  const refRBSheet = useRef() as React.MutableRefObject<RBSheet>;

  useEffect(() => {
    refRBSheet.current?.open();
  });

  const useTravel = useContext(TravelContext);
  const useVoice = useContext(VoiceContext);
  
  function cancel_Travel(){
    useTravel.setCancel(true);
    useTravel.setPrice(0.0);
    useTravel.setDestination(null);
    useTravel.setPassageiroID(null);
    useTravel.setCarro(null);
    useTravel.setDriver(null);
    useTravel.setOrigem(null);
    useTravel.setTravel_cod(null);
    useTravel.setConfirmation(null);
    useTravel.setTime(null);
    useTravel.setdriverlocation(null);
    useTravel.setTimeChegada(null);
    useTravel.setTimeChegada(null);
    useTravel.setpaymethod('Dinheiro');
    useVoice.setisVisibleDetails(false);
    useVoice.setisVisibleDriver(false);
    useVoice.setSearch("");
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      " Cancelar a Viagem",
      "Certeza que deseja cancelar a viagem? ",
      [
        {
          text: "Cancelar",
          onPress: cancel_Travel,
          style: "cancel"
        },
        { text: "Fechar", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  


  return (
        <CodContainer>
          <TypeCode style={{fontSize: 28, color: "white"}}>{useTravel.travel_cod}</TypeCode>
          <Container>            
            <TypeDescription style={{fontSize: 24, color: "#19cdce", alignSelf: "center"}}>{useTravel.destination?.title}</TypeDescription>
            <TypeDescription style={{fontSize: 24, color: "white"}}>Nome do motorista: {useTravel.driver}</TypeDescription>
            <TypeDescription style={{fontSize: 24, color: "white"}}>Carro: {useTravel.carro?.Carro}  {useTravel.carro?.Cor}</TypeDescription>
            <TypeDescription style={{fontSize: 24, color: "white"}}>Placa: {useTravel.carro?.placa}</TypeDescription>
            <TypeDescription style={{fontSize: 24, color: "white"}}>Valor: R${useTravel.price.toFixed(2)}</TypeDescription>
            <TypeDescription>Tempo de chegada: {useTravel.time_chegada} minutos</TypeDescription>
            <CancelButton onPress = {createTwoButtonAlert}><RequestButtonText>Cancelar</RequestButtonText></CancelButton>
          </Container>
        </CodContainer>
  );
}