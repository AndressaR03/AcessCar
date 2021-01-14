import React, { useState, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-community/voice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeConsumer } from 'styled-components';
import Places from "../Places";


type Props = {};
type State = {
  recognized: string;
  pitch: string;
  error: string;
  end: string;
  started: string;
  results: string[];
  partialResults: string[];
  done: boolean;
  isVisible: boolean,
  search: string,
  destination: { latitude: any; longitude: any; title: any; }
};



class VoiceComand extends Component<Props, State> {
  state = {
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [] ,
    partialResults: [],
    done: false,
    isVisible: false,
    search: '',
    destination: { latitude: null, longitude: null, title: null, },
    
  };

  constructor(props: Props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
    
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
      started: '',
    });
  };

  onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value!,
    });
  };

  onSpeechPartialResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value!,
    });
  };

  onSpeechVolumeChanged = (e: any) => {
    console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
      done: false,
      search: '',
    });

    try {
      await Voice.start('pt-BR');
    } catch (e) {
      console.error(e);
      this.setState({done: false})
    }
    
  };


  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
      done: false,
      search: '',
    });
  };

  searchPlace = () => {
    this.state.partialResults.map((result, index) => {
      this.state.search = result
      this.state.done = true
      console.log(this.state.search)
      console.log(this.state.done)
    });
  }

  handlelocationSelected = (data:any, { geometry }:any) => {
    const { location: {lat: latitude, lng: longitude} } = geometry;
    this.setState({
        destination: {
        latitude: latitude,
        longitude: longitude,
        title: data.structured_formatting.main_text,
      }
    });
  }
  render() {

    return (
      <View style={styles.container}>
        {this.state.error ? <Text style={styles.text_results}>Desculpe, não entendi. Tente Novamente</Text> : 
        this.state.partialResults.map((result, index) => {
          return (
            <Text key={`partial-result-${index}`} style={styles.text_results}>
              {result}
            </Text>
          );
        }) } 
        <TouchableHighlight onPress={this._startRecognizing}>
          <Image style={styles.buttonVoice} source={require('../../img/voice.png')} />
        </TouchableHighlight>
        {this.state.partialResults[0] ? 
          <TouchableHighlight style={styles.buttonIr} onPress={this.searchPlace}> 
            <Text style={styles.text_results}>Ir</Text>
          </TouchableHighlight> 
          : null}
        {this.state.done? null : <Places onLocationSelected = {this.handlelocationSelected}
        search = {this.state.search}></Places>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonVoice: {
    backgroundColor: '#19cdce',
    width: 150,
    height: 150,
    borderRadius: 75
  },
  buttonIr: {
    marginTop: 60,
    alignSelf: "center",
    width:280,
    height:55,
    backgroundColor:'#19cdce',
    borderRadius: 4,
    paddingTop: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  text_results: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 50,
    fontSize: 26
  }
});

export default VoiceComand;





