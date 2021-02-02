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


const Pagamento = () => {
    const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }
    return (
        <ScrollView style={styles.scrollView}>
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.cadastro}>Adicionar Cartão</Text>
                <Text style={styles.intro}>Por favor, informe seus dados do cartão.</Text>
                <View style={styles.pagamento}>                    
                    <TextInput placeholderTextColor="white" keyboardType={'numeric'} style={styles.numero} placeholder='Número do cartão' />                
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TextInput placeholderTextColor="white" keyboardType={'numbers-and-punctuation'} style={styles.validade} placeholder='MM/AA' />  
                    <TextInput placeholderTextColor="white" keyboardType={'numeric'} style={styles.cod} placeholder='CVV' /> 
                </View>
                <View style={styles.card}>                    
                    <TextInput placeholderTextColor="white" keyboardType={'name-phone-pad'} style={styles.nome} placeholder='Nome escrito no cartão' />                
                </View>
                
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.button} onPress={() => navigate("Necessidades")}>
                      <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Voltar</Text>
                  </TouchableOpacity>  
                  <TouchableOpacity style={styles.button} onPress={() => navigate("Menu")}>
                      <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Cadastrar</Text>
                  </TouchableOpacity>   
                </View>
            </KeyboardAvoidingView>
         </ScrollView>
    );
}
export default Pagamento;