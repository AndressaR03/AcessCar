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
import { ScrollView } from 'react-native-gesture-handler';

//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'

const Senha = () => {
  const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }
  return (   
      <KeyboardAvoidingView style={styles.container}>
          <Text style={{fontSize:28, color:'#19cdce'}}>CADASTRAR SENHA</Text>
          <Text style={{fontSize:16, color:'#fff', paddingTop:5}}>Crie sua senha de acesso</Text>
          <View style={styles.campos}>
            <TextInput  placeholderTextColor="white" style={styles.senha} placeholder='Senha min. (6 digitos)' secureTextEntry={true} />
            <TextInput  placeholderTextColor="white" style={styles.confirmarsenha} placeholder='Confirmar Senha' secureTextEntry={true} />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button1} onPress={() => navigate("Telefone")}>
              <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center",fontWeight:'bold', }}>Voltar</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.button2} onPress={() => navigate("Necessidades")}>
              <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center",fontWeight:'bold', }}>Avançar</Text>
            </TouchableOpacity>            
          </View>
      </KeyboardAvoidingView>
  );
}
export default Senha;