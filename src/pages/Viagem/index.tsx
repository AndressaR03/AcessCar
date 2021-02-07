import React from 'react'
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


//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'


const Viagem = () => {
    const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={{fontSize:28, color:'#19cdce', textAlign:'center'}}>MINHAS VIAGENS</Text>
            <Text style={{fontSize:16, color:'#fff', paddingTop:5, textAlign:'center'}}>Histórico de viagens</Text>
            <View style={styles.viagens}>  
                <Text style={styles.endereco}>Shopping Tamboré       12/20        R$ 45,10    </Text>
                <Text style={styles.endereco}>Padaria Central             05/20        R$ 20,00    </Text> 
                <Text style={styles.endereco}>Parque Villa Lobos       02/20        R$ 57,50   </Text>                       
            </View>                            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate("Menu")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight:"bold"}}>Fechar</Text>
                </TouchableOpacity>            
            </View>
        </KeyboardAvoidingView>
    );
}
export default Viagem;