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


const Cadastro = () =>  {
  const {navigate} = useNavigation ();
  function NextPageCadastrar (){
      navigate('Cadastro') 
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
      <View style={styles.container}>
        <TextInput style={styles.nome} placeholder='Nome'/>
        <TextInput keyboardType={'numeric'} style={styles.cpf} placeholder='CPF'/>
        <TextInput keyboardType={'phone-pad'} style={styles.telefone} placeholder='Telefone'/>
        <TextInput keyboardType={'email-address'} style={styles.email} placeholder='E-mail'/>
        <TextInput style={styles.senha} placeholder='Senha min. (6 digitos)' secureTextEntry={true}/>
        <TouchableOpacity style={styles.button}> 
          <Text style={{fontSize:20, color:'#1c1c1c', alignItems: "center"}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
     );
}
export default Cadastro;
