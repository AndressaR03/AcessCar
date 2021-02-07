import React from 'react'
import styles from './styles'
import {
View, 
Text,
Image,
TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () =>  {
     const {navigate} = useNavigation ();
    return (
    <View style={styles.container}>
      <Image 
        style= {{width:220, height:250, marginBottom:40}}
        source={require('../../img/logo2.png')}
      />
      <TouchableOpacity style={styles.button} onPress = {() => navigate("Entrar")}>
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress = {() => navigate("Cadastro")}>
        <Text style={styles.texto}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
    );
}   
  export default Login;