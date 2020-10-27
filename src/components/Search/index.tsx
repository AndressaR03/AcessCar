import {Platform} from 'react-native';
import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface IRecipeProps {
    onLocationSelected?: any;
  }
  
  interface IRecipeState {
  }

export default class Search extends Component <IRecipeProps, IRecipeState>{
    state:any = {
        searchFocused: null,
    }

    render(){

        const { searchFocused } = this.state; 
        const { onLocationSelected }  =  this.props;

        return <GooglePlacesAutocomplete
        placeholder = "Para onde?"
        minLength={2}
        onPress = {onLocationSelected}
        query={{
            key: 'AIzaSyAY16Bkbxcg1aJxiU-3jzS2kg5LgprpZMA',
            language: 'pt'
        }}
        textInputProps={{
            onFocus: () => {this.setState({ searchFocused: 'auto' })},
            onBlur: () => {this.setState({ searchFocused: null })},
            autoCapitalize: 'none',
            autoCorrect: false
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
          />;
    }
}