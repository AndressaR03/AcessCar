import React from 'react';
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
import firebase from 'react-native-firebase';


const Entrar = () => {
  const {navigate} = useNavigation ();
  function NextPageEntrar (){
      navigate('Cadastro') 
  }

  const state = {
    email: '',
    password: '',
    isAuthenticated: false,
    alert: '#1C1C1C',

  }

  async function login() {
    const { email, password} = state;

    try{
    const user = await firebase.auth()
    .signInWithEmailAndPassword(email, password);

      state.isAuthenticated = true;
      state.alert = "red";
      if(state.isAuthenticated == true){navigate('Menu');}
      console.log(user);
    } catch(err){
      console.log(err);
    }
  }


  return(
    <ScrollView style={styles.scrollView}>
    <KeyboardAvoidingView style={styles.container}>
    <View style={{height:30, width:380,backgroundColor:'#19cdce'}}>

</View>
      <View style={styles.container}>
      <Image 
         style= {{width:450, height:200, marginTop: 50,}}
         source={require('../../img/logo1.png')}
       />
      </View >
      <View style={styles.container}>
        {/*<TextInput underlineColorAndroid='transparent' placeholder='Nome' placeholderTextColor='#abb2b9' style={styles.nome2} />*/}
        <TextInput style={styles.nome} placeholder='Digite seu email'
         onChangeText={email => state.email = email}/>
        <TextInput style={styles.senha} placeholder='Digite sua senha' secureTextEntry={true}
         onChangeText={senha => state.password = senha}/>
        <TouchableOpacity style={styles.button} onPress = {login}>
          <Text style={{fontSize:20, color:'#1c1c1c', alignItems: "center"}}>Entrar</Text>
        </TouchableOpacity>
          
          { state.isAuthenticated ? '' : <Text style={{color: state.alert}}>Usuário ou senha incorretos.</Text>}
        
        <TouchableOpacity > 
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    </ScrollView>
     );
}
export default Entrar;
