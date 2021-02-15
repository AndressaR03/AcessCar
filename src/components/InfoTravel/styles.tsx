import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import styled from  'styled-components/native';

import {Platform } from 'react-native';


export const Container = styled.View`
    background: #1C1C1C;
    height: 310px;
    width: 98%;
    position: absolute;
    bottom: 0;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10px;
    elevation: 3;
    border: 1px solid #19cdce;
    align-items: flex-start;
    padding: 15px;
    flex: 1;
    flex-direction: column;
`;

export const CodContainer = styled.View`
    height: 350px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    background: #19cdce;
`;

export const TypeCode = styled.Text`
    font-size: 28px;
    color: #FFF;
`;

export const TypeDescription = styled.Text`
    color: #FFF;
    font-size: 24px;
`;

export const TypeImage = styled.Image`
    height: 90px;
    margin: 10px 0;
    flex: 3;
`;

export const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const CancelButton = styled.TouchableOpacity`
    border: 1px solid #FF0000;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 300px;
    align-self: center;
    margin-top: 10px; 
    margin-right: 10px;
`;