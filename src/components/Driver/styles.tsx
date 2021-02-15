import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import styled from  'styled-components/native';

import {Platform } from 'react-native';


export const Container = styled.View`
    background: #1C1C1C;
    height: 100px;
    width: 300px;
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
    font-size: 22px;
    color: #FFF;
`;

export const TypeDescription = styled.Text`
    color: #FFF;
    font-size: 20px;
    flex:3;
    padding: 15px;
    align-items: flex-end;
`;

export const TypeCarDescription = styled.Text`
    color: #FFF;
    font-size: 18px; 
`;

export const TypeImage = styled.Image`
    height: 90px;
    margin: 10px 0;
    flex: 3;
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

