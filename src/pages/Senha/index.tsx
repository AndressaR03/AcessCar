import React, { useContext, useState } from 'react'
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
import PassageiroContext from "../../context/Passageiro";


//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'

function Senha() {

  const [senha, setSenha] = useState<string>('');
  const [confirmSenha, setConfirmSenha] = useState("");

  const usePassageiro = useContext(PassageiroContext);
  const { navigate } = useNavigation();

  function SaveDataNext() {
    if (senha && senha == confirmSenha) {
      if (senha.length >= 6) {
        usePassageiro.setSenha(senha);
        console.log(usePassageiro.senha);
        navigate("Necessidades");
      } else {
        alert("A senha deve conter no mínimo 6 dígitos");
      }
    } else {
      console.log("As senhas não conferem");
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ fontSize: 28, color: '#19cdce' }}>CADASTRAR SENHA</Text>
      <Text style={{ fontSize: 16, color: '#fff', paddingTop: 5 }}>Crie sua senha de acesso</Text>
      <View style={styles.campos}>
        <TextInput placeholderTextColor="white" style={styles.senha} placeholder='Senha min. (6 digitos)' secureTextEntry={true} onChangeText={senha => setSenha(senha)} />
        <TextInput placeholderTextColor="white" style={styles.confirmarsenha} placeholder='Confirmar Senha' secureTextEntry={true} onChangeText={confirmsenha => setConfirmSenha(confirmsenha)} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button1} onPress={() => navigate("Telefone")}>
          <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight: 'bold', }}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={SaveDataNext}>
          <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight: 'bold', }}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Senha;