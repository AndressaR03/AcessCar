import React, { useState } from 'react'
import styles from './styles'
import {  
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import {db} from '../../back/firebase';
import { useNavigation } from '@react-navigation/native';

  const Cadastro = () =>  {
    const { navigate } = useNavigation();
    navigate('Cadastro');
    const [state, setState] = useState({
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      senha: "",
    });

    const handleChangeText = (name: any, value: any) => {
      setState({ ...state, [name]: value});
    }

    const AddNewUser = async () => {
      if(state.nome === '') {
        console.log('Preencha todos os campos!!!');
      } else {
        await db.collection('usuarios').add({
          nome: state.nome,
          email: state.email,
          cpf: state.cpf,
          telefone: state.telefone,
          senha: state.senha,
        })
        console.log('saved')
      }
    }
    
  return (
    <ScrollView style={styles.scrollView}>
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.cadastro}>CADASTRO</Text>
        <Text style={styles.intro}>Informe seus dados para cadastro!</Text>
      </View >     
      <View style={styles.campos} >
        <TextInput placeholderTextColor="white" style={styles.nome} placeholder='Nome' onChangeText={(value) => handleChangeText("nome", value)}/>
        <TextInput placeholderTextColor="white" keyboardType={'numeric'} style={styles.cpf} placeholder='CPF' onChangeText={(value) => handleChangeText("cpf", value)}/>
        <TextInput placeholderTextColor="white" keyboardType={'phone-pad'} style={styles.telefone} placeholder='Telefone'onChangeText={(value) => handleChangeText("telefone", value)}/>
        <TextInput placeholderTextColor="white" keyboardType={'email-address'} style={styles.email} placeholder='E-mail' onChangeText={(value) => handleChangeText("email", value)}/>
        <TouchableOpacity style={styles.button} onPress={() => AddNewUser()}> 
          <Text style={{fontSize:20, color:'#1c1c1c', alignItems: "center"}} onPress={() => navigate("Senha")}>Próximo</Text>
        </TouchableOpacity>
      </View>      

    </KeyboardAvoidingView>
    </ScrollView>
     );
}
export default Cadastro;
