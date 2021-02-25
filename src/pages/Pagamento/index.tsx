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


const Pagamento = () => {
    const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={{fontSize:28, color:'#19cdce', textAlign:'center'}}>ADICIONAR CARTÃO</Text>
            <Text style={{fontSize:16, color:'#fff', paddingTop:5, textAlign:'center'}}>Por favor, informe seus dados do cartão.</Text>
            <View style={styles.pagamento}>  
                <TextInput placeholderTextColor="white" keyboardType={'numeric'} style={styles.numero} placeholder='Número do cartão' />                        
            <View style={styles.datacod}>
                <TextInput placeholderTextColor="white" keyboardType={'numeric'} style={styles.validade} placeholder='MM/AA' />  
                <TextInput placeholderTextColor="white" keyboardType={'numeric'} style={styles.cod} placeholder='CVV' />               
            </View>
            <TextInput placeholderTextColor="white" keyboardType={'default'} style={styles.nome} placeholder='Nome escrito no cartão' />              
            </View>                            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button1} onPress={() => navigate("Perfil")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center"}}>Voltar</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button2} onPress={() => navigate("Perfil")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Cadastrar</Text>
                </TouchableOpacity>            
            </View>
        </KeyboardAvoidingView>
    );
}
export default Pagamento;