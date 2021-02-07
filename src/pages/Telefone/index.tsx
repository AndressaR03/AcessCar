import React from 'react'
import styles from './styles'
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'

const Telefone = () => {

  const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }  

   return (   
      <KeyboardAvoidingView style={styles.container}>
          <Text style={{fontSize:26, color:'#19cdce'}}>INSIRA SEU Nº DE CELULAR</Text>
          {/* <Text style={{fontSize:18, color:'#fff', paddingTop:5}}>Você recebera um sms para confirmação</Text> */}
          <View style={styles.campos}>
            <TextInput placeholderTextColor="white" keyboardType={'phone-pad'} style={styles.telefone} placeholder='Seu número' />
          </View>
           <View style={styles.footer}>
            <TouchableOpacity style={styles.button1} onPress={() => navigate("Cadastro")}>
              <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center",fontWeight:'bold', }}>Voltar</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.button2} onPress={() => navigate("Senha")}>
              <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight:'bold' }}>Avançar</Text>
            </TouchableOpacity>            
          </View> 
      </KeyboardAvoidingView>
  );
}
export default Telefone;