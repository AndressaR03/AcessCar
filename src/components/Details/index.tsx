import React, { Component, useContext, useEffect, useState, } from 'react';

import { View , StyleSheet} from 'react-native';

import '../../image.ts';

import uberx from '../../img/uberx.png';
import { RadioButton, Text } from 'react-native-paper';

import { Container, 
    TypeTitle,
    ModalPaymethod,
    TypeDescription,
    TypeImage,
    RequestButton,
    SaveButton,
    PaymethodButtonText, 
    RequestButtonText, 
    PaymethodButton, 
    TypeCarDescription,
    ButtonText
} from './styles';

import {VoiceContext} from '../../context/Voice';
import {TravelContext} from '../../context/Travel';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SwitchSelector from "react-native-switch-selector";


function Details( {distance, duration}:any){

    const [preco, setPreco] = useState<any>(0.0)
    const default_price = 8.50;
    const [isVisible, setisVisible] = useState(false)
    

    const paymethod = [{Forma: "Dinheiro"}, {Forma: "Cartão final xx38 (Crédito)"}, {Forma: "Cartão final xx97"}]

    const useVoice = useContext(VoiceContext);
    const useTravel = useContext(TravelContext);

    useEffect(() => {
       if(useTravel.driverlocation == null){
        _getprice()}
     });

     function _getprice(){
        const price = distance * 2.4;
        if(price < default_price){
            setPreco(default_price);
        }
        else{
            setPreco(price)
        }
        useTravel.setPrice(preco);
     };

    function handlerequest(){
        useVoice.setisVisibleDetails(false);
        useVoice.setisVisibleDriver(true);
        useTravel.setCancel(false)
        get_Travel_cod();
    }
    
    const options4 = [
        { label: "não", value: "1" },
        { label: "sim", value: "1.5" },
    ];

    function get_Travel_cod(){
        let cod = []; 
        for (let i = 0; i < 6; i++){
          const num = Math.floor(Math.random() * 10)
          cod.push(num);
        }
        useTravel.setTravel_cod(cod);
      }
  
    return(
    <Container>
        <TypeTitle>Confirme sua viagem</TypeTitle>
        <View style={{flex:1, flexDirection: 'row', alignItems:'center'}}>
            <TypeImage source={uberx}/>
                <TypeCarDescription>AcessCar X</TypeCarDescription>
            <TypeDescription>R${useTravel.price.toFixed(2)}</TypeDescription>
        </View>
        <PaymethodButton onPress={() => {setisVisible(true)}}>
            <PaymethodButtonText>{`${useTravel.paymethod}    >`}</PaymethodButtonText>
        </PaymethodButton>
        <RequestButton onPress={handlerequest}>
            <RequestButtonText>SOLICITAR ACESSCAR</RequestButtonText>
        </RequestButton>
        <ModalPaymethod 
            animationType={'slide'} 
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
            useVoice.setSearch("");
            }}>
            <View style={{flex:1, backgroundColor: "#1c1c1c", paddingTop: 40, flexDirection: 'column', alignItems: "center"}}>
                <TypeTitle>Selecione a forma de pagamento</TypeTitle>
                { paymethod.map((result:any, index:any) => {
                return (
                    <PaymethodButton key={`partial-result-${index}`} onPress={() => {useTravel.setpaymethod(result?.Forma)}}>
                        <ButtonText>{result?.Forma}</ButtonText>
                    </PaymethodButton>
                );})}   
                <SaveButton onPress={() => {setisVisible(false)}}>
                    <RequestButtonText>SALVAR</RequestButtonText>
                </SaveButton>
            </View>
        </ModalPaymethod>   
    </Container>
);
}

const styles = StyleSheet.create({
    intro: {
        height: 44,
        backgroundColor: '#19cdce',
    },
});
export default Details;


