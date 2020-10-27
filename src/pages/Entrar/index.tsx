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

const Entrar = () => {
  const {navigate} = useNavigation ();
  function NextPageEntrar (){
      navigate('Cadastro') 
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
        <TextInput underlineColorAndroid='transparent' placeholder='Nome' placeholderTextColor='#abb2b9' style={styles.nome2} />
        <TextInput style={styles.nome} placeholder='Nome'/>
        <TextInput style={styles.senha} placeholder='Senha min. (6 digitos)' secureTextEntry={true}/>

        <TouchableOpacity style={styles.button} onPress = {() => navigate ('Menu')}>
          <Text style={{fontSize:20, color:'#1c1c1c', alignItems: "center"}}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity > 
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    </ScrollView>
     );
}
export default Entrar;
