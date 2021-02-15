import {Platform} from 'react-native';
import React, {Component, createRef, useContext, useEffect, useLayoutEffect, useState} from 'react';
import { TextInput } from 'react-native';
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import {VoiceContext} from "../../context/Voice"

interface IRecipeProps {
    onLocationSelected: any;
  }
  
  interface IRecipeState {
  }

  const Search = (props: IRecipeProps) => {
    const [searchFocused, setsearchFocused] = useState<any>(null);
    const [search] = useState('')

    const useVoice = useContext(VoiceContext);
    const ref = createRef<GooglePlacesAutocompleteRef>();
    let onLocationSelected = props.onLocationSelected;

    useEffect(() => {
        if(useVoice.search_voice !== ""){ 
         ref.current?.setAddressText(useVoice.search_voice)
         ref.current?.focus();}
     });

    return (
                <GooglePlacesAutocomplete
                    ref={ref}
                    placeholder='Para onde?'
                    minLength={0}
                    onPress={props.onLocationSelected}
                    query={{
                        key: 'AIzaSyBMafnS7Tw3QxAkaBQO0-V9DsueL3SjsxY',
                        language: 'pt',
                    }}
                    textInputProps={{
                        onFocus: () => setsearchFocused('auto'),
                        onBlur: () => setsearchFocused(null),
                        autoCapitalize: 'none',
                        autoCorrect: false,
                    }}
                    listViewDisplayed={'auto'}
                    fetchDetails
                    timeout = {100}
                    autoFillOnNotFound = {true}
                    enablePoweredByContainer={false}
                    styles={{
                        container: {
                            position: "absolute",
                            top: Platform.select({ ios: 60, android: 40 }),
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
    );
};

export default Search;