import React from 'react'
import styles from './styles'
import {
    View,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';


//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'


const Cartao = () => {
    const { navigate } = useNavigation();
    function NextPageCadastrar() {
        navigate('Cadastro')
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={{ fontSize: 28, color: '#19cdce', textAlign: 'center' }}>CARTÃO CADASTRADO</Text>
            <Text style={{ fontSize: 16, color: '#fff', paddingTop: 5, textAlign: 'center' }}>Dados do cartão cadastrado atualmente.</Text>

            <View style={styles.pagamento}>
                <Text style={styles.numero}>XXXX XXXX XXXX XXXX</Text>
                <View style={styles.datacod}>
                    <Text style={styles.validade}> 12/24</Text>
                    <Text style={styles.cod}> 542</Text>
                </View>
                <Text style={styles.nome}>Alberto Silva</Text>
            </View>
            <TouchableOpacity >
                <Text style={styles.link}>Editar Cartão</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.link}>Excluir Cartão</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button2} onPress={() => navigate("Menu")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight: 'bold' }}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
export default Cartao;