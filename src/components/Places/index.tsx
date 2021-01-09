
import React, { createRef, useEffect, useRef} from 'react';
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';


interface IRecipeProps {
    onLocationSelected?: any,
    search: string,
}
interface IRecipeState {

}

const GooglePlacesInput = (args: IRecipeProps) => {
    const state: any = {
        searchFocused: null,
        search: '',
    }

    const ref = createRef<GooglePlacesAutocompleteRef>();

    useEffect(() => {
        ref.current?.setAddressText('Shopping Tamboré');
        ref.current?.focus();
    }, []);

    return (
        <>
            <Container>
                <TypeTitle>Resultados da Pesquisa</TypeTitle>
                <GooglePlacesAutocomplete
                    ref={ref}
                    placeholder='Para onde?'
                    minLength={0}
                    onPress={(data, details = null) => {
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyBMafnS7Tw3QxAkaBQO0-V9DsueL3SjsxY',
                        language: 'pt',
                    }}
                    textInputProps={{
                        onFocus: () => state.searchFocused = 'auto',
                        onBlur: () => state.searchFocused = null,
                        autoCapitalize: 'none',
                        autoCorrect: false,
                      //  value: "Rua Chile 40 "
                    }}
                    listViewDisplayed={'auto'}
                    fetchDetails
                    timeout = {100}
                    autoFillOnNotFound = {true}
                    enablePoweredByContainer={false}
                    styles={{
                        container: {
                            position: "absolute",
                            //top: Platform.select({ ios: 60, android: 40 }),
                            width: "100%",
                        },
                        textInputContainer: {
                            flex: 1,
                            height: 54,
                            marginHorizontal: 20,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            backgroundColor: "transparent"
                        },
                        textInput: {
                            height: 54,
                            margin: 0,
                            borderRadius: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginTop: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            elevation: 5,
                            shadowColor: "#000",
                            shadowOpacity: 0.1,
                            shadowRadius: 15,
                            borderWidth: 1,
                            borderColor: "#DDD",
                            fontSize: 18,
                            shadowOffset: { width: 0, height: 0 }
                        },
                        listView: {
                            borderWidth: 1,
                            borderColor: "#DDD",
                            backgroundColor: "#FFF",
                            marginHorizontal: 20,
                            elevation: 5,
                            shadowColor: "#000",
                            shadowOpacity: 0.1,
                            shadowRadius: 15,
                            shadowOffset: { width: 0, height: 0 },
                            marginTop: 10
                        },
                        description: {
                            fontSize: 16
                        },
                        row: {
                            padding: 20,
                            height: 58
                        }
                    }}
                />
            </Container>
        </>
    );
};

export default GooglePlacesInput;



/*import React, { Component, useEffect, useRef , createRef} from 'react';
import {Platform} from 'react-native';
import { TextInput } from 'react-native';
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import { View } from 'react-native';
import '../../image.ts';
import uberx from '../../img/uberx.png';
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';

interface IRecipeProps {
    onLocationSelected?: any,
    search: string,
  }
interface IRecipeState {

}

export default class Places extends Component <IRecipeProps, IRecipeState>{
    state:any = {
        searchFocused: null,
        search: '',
    }

    render(){

        const { searchFocused } = this.state;
        const { onLocationSelected }  =  this.props;
        const googleplaces = createRef<GooglePlacesAutocompleteRef>();

        useEffect(() => {
            googleplaces.current?.setAddressText('Some Text');
        }, []);

  return(
        <Container>
        <TypeTitle>Resultados da Pesquisa</TypeTitle>
        <GooglePlacesAutocomplete
        ref = {googleplaces}
        placeholder = "Para onde?"
        minLength={2}
        onPress = {(data, details = null) => {
            console.log(data, details);}}
        query={{
            key: 'AIzaSyBMafnS7Tw3QxAkaBQO0-V9DsueL3SjsxY',
            language: 'pt'
        }}
        textInputProps={{
            onFocus: () => {this.setState({ searchFocused: 'auto' })},
            onBlur: () => {this.setState({ searchFocused: null })},
            autoCapitalize: 'none',
            autoCorrect: false,
            value:  googleplaces.current?.setAddressText('Some Text')
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer = {false}
        styles={{
            container:{
                position: "absolute",
                top: Platform.select({ ios: 60, android: 40}),
                width: "100%",
            },
            textInputContainer: {
                flex:1,
                height: 54,
                marginHorizontal: 20,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                backgroundColor: "transparent"
            },
            textInput: {
                height: 54,
                margin: 0,
                borderRadius: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                elevation: 5,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 15,
                borderWidth: 1,
                borderColor: "#DDD",
                fontSize: 18,
                shadowOffset: {width: 0, height:0}
            },
            listView: {
                borderWidth: 1,
                borderColor: "#DDD",
                backgroundColor: "#FFF",
                marginHorizontal: 20,
                elevation: 5,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 15,
                shadowOffset: {width: 0, height:0},
                marginTop: 10
            },
            description: {
                fontSize: 16
            },
            row: {
                padding: 20,
                height: 58
            }
        }}
          />
        </Container>)
    }
}*/