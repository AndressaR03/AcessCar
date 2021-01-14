import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import styled from  'styled-components/native';

import {Platform } from 'react-native';


export const Container = styled.View`
    background: #1C1C1C;
    height: 300px;
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
`;

export const TypeTitle = styled.Text`
    font-size = 20px;
    color: #FFF;
`;

export const TypeDescription = styled.Text`
    color: #FFF;
    font-size: 14px;   
`;

export const TypeImage = styled.Image`
    height: 80px;
    margin: 10px 0;
`;

export const RequestButton = styled.TouchableOpacity`
    background: #19cdce;
    justify-content: center;
    align-items: center;
    height: 44px;
    align-self: stretch;
    margin-top: 10px; 
`;

export const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

