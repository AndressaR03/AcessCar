import styled, {css} from 'styled-components/native';
import { DatePickerAndroid, Platform } from 'react-native';

export const LocationBox = styled.View`
    background: #FFF;
    elevation: 1;
    border: 1px solid #ddd;
    border-radius: 3px; 
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.1;
    flex-direction: row;


    ${Platform.select({
        ios: css`
        margin-top: 20px;
        ` ,
        android: css`
        margin-top: 10px;
        margin-left: 10px;
        `
    })}
`;

export const LocationText = styled.Text`
    margin: 8px 10px;
    font-size: 14px;
    color: #333
`;

export const LocationTimeBox = styled.View`
    background: #222,
    padding: 3px 8px;
`;

export const LocationTimeText = styled.Text`
    color: #fff;
    font-size: 12px;
    text-align: center;
`;

export const LocationTimeTextSmall = styled.Text`
    color: #fff;
    font-size: 10px;
    text-align: center;

`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    top: ${Platform.select({
        ios: 60,
        android: 40,
    })};
    left: 20px;
    background: #4F4F4F;
    width: 40px;
    height: 30px;
    justifyContent: center;
    padding-left:  8px;
    border-radius: 4px;
`;

export const VoiceButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #19cdce;
    width: 60px;
    height: 60px;
    justifyContent: center;
    padding-left:  8px;
    border-radius: 4px;
`;


