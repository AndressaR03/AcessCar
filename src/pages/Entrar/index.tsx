import React, {useContext, useState} from 'react';
import styles from './styles'
import {
  StyleSheet,  
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import firebase, { auth } from 'react-native-firebase';
import AuthContext from "../../context/Auth"


function Entrar () {

  //Importando o Context API que contém as informações de login. 
  const {signed, signIn, user} = useContext(AuthContext);
  const {navigate} = useNavigation ();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Simulação de autenticação para criação de fluxo de rotas
  async function handleSignIn() {
    signIn(email, password);
  }
  // ----- end ---- 


 
 /* async function login() {
    try{
    const user = await firebase.auth()
    .signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch(err){
      console.log(err);
    }
  }*/
  // -------- end -------------



  return(
    <KeyboardAvoidingView style={styles.container}>      
      <Image 
         style= {{width:200, height:170, marginTop: 80, alignItems:'center', justifyContent:'center'}}
         source={require('../../img/logo2.png')}
       />     
      <View style={styles.campos}>
        <TextInput placeholderTextColor="white" style={styles.email} placeholder='Digite seu email'
         onChangeText={email => setEmail(email)}/>
        <TextInput placeholderTextColor="white" style={styles.senha} placeholder='Digite sua senha' secureTextEntry={true}
         onChangeText={senha => setPassword(senha)}/>    
          
        <TouchableOpacity > 
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity> 
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress = {handleSignIn}>
            <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center",fontWeight:'bold', }}>Entrar</Text>
          </TouchableOpacity>
        </View>       
      </View>
      
    </KeyboardAvoidingView>
     );
}
export default Entrar;
//{ state.isAuthenticated ? '' : <Text style={{color: state.alert}}>Usuário ou senha incorretos.</Text>}