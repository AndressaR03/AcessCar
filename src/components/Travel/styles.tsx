import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import styled from  'styled-components/native';

import {Platform } from 'react-native';


export const Container = styled.View`
    background: #1C1C1C;
    height: 400px;
    width: 100%;
    position: absolute;
    bottom: 0;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10px;
    elevation: 3;
    border: 1px solid #19cdce;
    align-items: center;
    padding: 20px;
    flex: 1;
    flex-direction: column;
`;

export const TypeTitle = styled.Text`
    font-size: 24px;
    color: #FFF;
    padding-top: 10px;
    padding-bottom: 40px;
`;

export const TypeDescription = styled.Text`
    color: #FFF;
    font-size: 16px;
    flex:3;
    padding: 15px;
    align-items: flex-end;
`;

export const TypeCarDescription = styled.Text`
    color: #FFF;
    font-size: 24px;
`;

export const TypeImage = styled.Image`
    height: 90px;
    margin: 10px 0;
    flex: 3;
`;

export const CloseButton = styled.TouchableOpacity`
    background: #19cdce;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 170px;
    align-self: stretch;
    margin-top: 10px; 
`;

export const CancelButton = styled.TouchableOpacity`
    border: 1px solid #FF0000;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 170px;
    align-self: stretch;
    margin-top: 10px; 
    margin-right: 10px;
`;

export const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

