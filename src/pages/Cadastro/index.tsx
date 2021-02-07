import React from 'react'
import styles from './styles'
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';


//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'


const Cadastro = () => {
  const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }
  return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={{fontSize:28, color:'#19cdce'}}>CADASTRO</Text>
        <Text style={{fontSize:16, color:'#fff', paddingTop:5}}>Informe seus dados para cadastro!</Text>
        <View style={styles.campos}>
          <TextInput placeholderTextColor="white" keyboardType={'default'} style={styles.nome} placeholder='Nome' />
          <TextInput placeholderTextColor="white" keyboardType={'phone-pad'} style={styles.cpf} placeholder='CPF' />
          <TextInput placeholderTextColor="white" keyboardType={'email-address'} style={styles.email} placeholder='E-mail' />
          <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={() => navigate("Telefone")}>
            <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight:'bold' }}>Avançar</Text>
          </TouchableOpacity>
        </View>      
        </View>
      </KeyboardAvoidingView>
  );
}
export default Cadastro;
