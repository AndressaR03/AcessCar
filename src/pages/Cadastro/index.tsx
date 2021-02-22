import React, {useContext, useState} from 'react'
import styles from './styles'
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import PassageiroContext from "../../context/Passageiro"


//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'


function Cadastro(){
  const [nome, setNome ] = useState('');
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState<string>('');
  
  const usePassageiro = useContext(PassageiroContext);
  const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }

  function SaveDataNext(){
    if(nome && email && cpf){
      usePassageiro.setEmail(email);
      usePassageiro.setNome(nome);
      usePassageiro.setCPF(cpf);
      console.log(usePassageiro.nome, usePassageiro.email, usePassageiro.cpf);
      navigate("Telefone");
    }else{
      alert("Preencha todos os campos!");
    }
  }

  return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={{fontSize:28, color:'#19cdce'}}>CADASTRO</Text>
        <Text style={{fontSize:16, color:'#fff', paddingTop:5}}>Informe seus dados para cadastro!</Text>
        <View style={styles.campos}>
          <TextInput placeholderTextColor="white" keyboardType={'default'} style={styles.nome} placeholder='Nome' onChangeText={nome => setNome(nome)} />
          <TextInput placeholderTextColor="white" keyboardType={'phone-pad'} style={styles.cpf} placeholder='CPF' onChangeText={cpf => setCPF(cpf)} />
          <TextInput placeholderTextColor="white" keyboardType={'email-address'} style={styles.email} placeholder='E-mail' onChangeText={email => setEmail(email)} />
          <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={SaveDataNext}>
            <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight:'bold' }}>Avançar</Text>
          </TouchableOpacity>
        </View>      
        </View>
      </KeyboardAvoidingView>
  );
}
export default Cadastro;
