import React from 'react'
import styles from './styles'
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';


const viagens = [{destino: 'Shopping Tamboré', valor: 'R$45,10',  date: '12/20'},
{destino: 'Padaria Central ', valor: 'R$20,00',  date: '05/20'},
{destino: 'Parque Villa Lobos ', valor: 'R$57,50',  date: '02/20'},
{destino: 'Fatec Carapicuiba', valor: "R$48.80", date: "03/20"}]
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
            <ScrollView>
            <View style={styles.viagens}>
            {viagens[0] ? viagens.map((result:any, index:any) => {
                return (
                    <View style={styles.list}> 
                        <Text key={`partial-result-${index}`} style={styles.endereco}>
                            {result.destino}    
                        </Text>
                        <Text key={`partial-result-${index}`} style={styles.endereco}>
                            {result.date}
                        </Text>
                        <Text key={`partial-result-${index}`} style={styles.endereco}>
                            {result.valor}
                        </Text>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#19cdce', paddingBottom:15}}/>
                    </View>
                );
            }) : <Text style={styles.endereco}>Nenhuma viagem para exibir</Text> }                        
            </View>              
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate("Perfil")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center"}}>Fechar</Text>
                </TouchableOpacity>            
            </View>
        </KeyboardAvoidingView>
    );
}
export default Viagem;