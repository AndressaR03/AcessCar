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

const NovaSenha = () => {
  const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }
  return (   
      <KeyboardAvoidingView style={styles.container}>
          <Text style={{fontSize:28, color:'#19cdce'}}>TROCAR SENHA</Text>
          <Text style={{fontSize:16, color:'#fff', paddingTop:5}}>Altere sua senha de acesso</Text>
          <View style={styles.campos}>
            <TextInput  placeholderTextColor="white" style={styles.senha} placeholder='Nova Senha' secureTextEntry={true} />
            <TextInput  placeholderTextColor="white" style={styles.confirmarsenha} placeholder='Confirmar Nova Senha' secureTextEntry={true} />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button1} onPress={() => navigate("Perfil")}>
              <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Cancelar</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.button2} onPress={() => navigate("Perfil")}>
              <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Cadastrar</Text>
            </TouchableOpacity>            
          </View>
      </KeyboardAvoidingView>
  );
}
export default NovaSenha;