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

  const Cadastro = () =>  {

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
    <View style={{height:30, width:380,backgroundColor:'#19cdce'}}>

</View>
      <View>
        <Text style={styles.cadastro}>CADASTRO</Text>
        <Text style={styles.intro}>Cadastre-se e inicie sua jornada!</Text>
        <Text style={styles.intro2}>Onde você quer ir hoje?</Text>
      </View >
     
      <View style={styles.container} >

        <TextInput style={styles.nome} placeholder='Nome' onChangeText={(value) => handleChangeText("nome", value)}/>
        <TextInput keyboardType={'numeric'} style={styles.cpf} placeholder='CPF' onChangeText={(value) => handleChangeText("cpf", value)}/>
        <TextInput keyboardType={'phone-pad'} style={styles.telefone} placeholder='Telefone'onChangeText={(value) => handleChangeText("telefone", value)}/>
        <TextInput keyboardType={'email-address'} style={styles.email} placeholder='E-mail' onChangeText={(value) => handleChangeText("email", value)}/>
        <TextInput style={styles.senha} placeholder='Senha min. (6 digitos)' secureTextEntry={true} onChangeText={(value) => handleChangeText("senha", value)}/>

        <TouchableOpacity style={styles.button} onPress={() => AddNewUser()}> 
          <Text style={{fontSize:20, color:'#1c1c1c', alignItems: "center"}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      

    </KeyboardAvoidingView>
    </ScrollView>
     );
}

export default Cadastro;
