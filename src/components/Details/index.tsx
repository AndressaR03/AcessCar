import React, { Component } from 'react';

import { View } from 'react-native';

import '../../image.ts'

import uberx from '../../img/uberx.png'

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';


const Details = ({distance, duration}: any ) => (
    <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>
        <TypeImage source={uberx}/>
            <TypeTitle>AcessCar</TypeTitle>
            <TypeDescription>R${(distance * 2.4).toFixed(2)}</TypeDescription>

            <RequestButton onPress={() => {}}>
                <RequestButtonText>SOLICITAR ACEESSCAR</RequestButtonText>
            </RequestButton>
        </Container>
);

export default Details;