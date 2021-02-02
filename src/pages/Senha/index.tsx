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


const Senha = () => {
  const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }
  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <Text style={styles.cadastro}>CADASTRO</Text>
          <Text style={styles.intro}>Crie uma senha de acesso</Text>
        </View >
        <View style={styles.campos}>
          <TextInput  placeholderTextColor="white" style={styles.senha} placeholder='Senha min. (6 digitos)' secureTextEntry={true} />
          <TextInput  placeholderTextColor="white" style={styles.senha} placeholder='Confirmar Senha' secureTextEntry={true} />

          <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.button} onPress={() => navigate("Cadastro")}>
            <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Voltar</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.button} onPress={() => navigate("Necessidades")}>
            <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Próximo</Text>
          </TouchableOpacity>   
      </View>      
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default Senha;
