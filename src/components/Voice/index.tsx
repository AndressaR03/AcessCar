import React, { useState,useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';

import {VoiceContext} from "../../context/Voice"

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-community/voice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeConsumer } from 'styled-components';
import Search from '../Search';


type Props = {};



export default function VoiceComand (props:Props) {

  const [recognized, setRecognized] = useState('');
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState<string[]|[]>([]);
  const [busca, setBusca] = useState('');
  const [partialResults, setPartialResults] = useState<any>([]);
  const useVoice = useContext(VoiceContext);


 Voice.onSpeechStart = onSpeechStart;
 Voice.onSpeechRecognized = onSpeechRecognized;
 Voice.onSpeechEnd = onSpeechEnd;
 Voice.onSpeechError = onSpeechError;
 Voice.onSpeechResults = onSpeechResults;
 Voice.onSpeechPartialResults = onSpeechPartialResults;
 Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;


 useEffect(() => {
  Voice.destroy().then(Voice.removeAllListeners);
  }, []);
  

  function onSpeechStart (e: any){
    //console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  function onSpeechRecognized (e: SpeechRecognizedEvent){
   //console.log('onSpeechRecognized: ', e);
   setRecognized('√');
   setStarted('');
  };

  function onSpeechEnd (e: any){
   // console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  function onSpeechError(e: SpeechErrorEvent){
   // console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  function onSpeechResults(e: SpeechResultsEvent){
   // console.log('onSpeechResults: ', e);
    setResults(e.value!)
  }

  function onSpeechPartialResults(e: SpeechResultsEvent){
    //console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value!);
  };

  function onSpeechVolumeChanged(e: any){
    //console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value)
  };

  async function _startRecognizing (){
    setRecognized('');
    setPitch('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');

    try {
      await Voice.start('pt-BR');
    } catch (e) {
      console.error(e);
    }
  };


  async function _stopRecognizing(){
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  async function _cancelRecognizing(){
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  async function _destroyRecognizer(){
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    setRecognized('');
    setPitch('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');
  };


  async function searchPlace(){
    partialResults.map((result:any, index:any) => {
      useVoice.setSearch(result);
     });
     useVoice.setisVisibleVoice(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text_results}>Para onde?</Text>
      {error ? <Text style={styles.text_results}>Desculpe, não entendi. Pode repitir?</Text> : 
        partialResults.map((result:any, index:any) => {
          return (
            <Text key={`partial-result-${index}`} style={styles.text_results}>
              {result}
            </Text>
          );
        }) } 
        <TouchableHighlight onPress={_startRecognizing}>
          <Image style={styles.buttonVoice} source={require('../../img/voice.png')} />
        </TouchableHighlight>
        {partialResults[0] ? 
          <TouchableHighlight style={styles.buttonIr} onPress={searchPlace}> 
            <Text style={styles.text_results}>Ir</Text>
          </TouchableHighlight> 
          : null}
      </View>)
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




