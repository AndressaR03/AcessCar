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
import { ScrollView } from 'react-native-gesture-handler';

const cartoes =  [{id: 'Cartão 1:', number: '5555 5555 5555 5555', data: '12/28', codigo: '253', name: 'Carlos Alberto'},
                  {id: 'Cartão 2:', number: '8888 8888 8888 8888', data: '02/22', codigo: '224', name: 'Maria Pereira'},
                  {id: 'Cartão 3:', number: '3333 3333 3333 3333', data: '10/21', codigo: '658', name: 'Pablo Nogueira'}

]

//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'

const CadastroCartao = () => {
    const { navigate } = useNavigation();
  function NextPageCadastrar() {
    navigate('Cadastro')
  }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{marginRight:0, width:'100%', alignItems:'flex-end', paddingRight: 40}}>
             <TouchableOpacity style={styles.fechar} onPress={() => navigate("Perfil")}>
                    <Text style={{ fontSize: 25, color: '#1c1c1c', alignItems: "center", fontWeight:'bold'}}>X</Text>
                </TouchableOpacity>
                </View>
            <Text style={{fontSize:28, color:'#19cdce', textAlign:'center', marginTop:40}}>MEU CARTÃO</Text>
            <Text style={{fontSize:16, color:'#fff', paddingTop:5, textAlign:'center'}}>Dados do cartão</Text>

           <ScrollView style={{}}>
            <View style={styles.viagens}>
                {cartoes[0] ? cartoes.map((result:any, index:any) => {
                    return(
                        <View style={styles.list}>
                            <Text key={`partial-result-1${index}`} style={{color:'#fff', fontSize:20, paddingBottom:10}}>
                                {result.id}
                            </Text>
                            <Text key={`partial-result-1${index}`} style={styles.endereco}>
                                {result.number}
                            </Text>
                            <Text key={`partial-result-2${index}`} style={styles.endereco}>
                                {result.data}
                            </Text>
                            <Text key={`partial-result-3${index}`} style={styles.endereco}>
                                {result.codigo}
                            </Text>
                            <Text key={`partial-result-4${index}`} style={styles.endereco}>
                                {result.name}
                            </Text>
                            <View>  
                            <TouchableOpacity style={styles.button2} onPress={() => navigate("")}>
                                <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center"}}>Excluir cartão</Text>
                            </TouchableOpacity>
                            <View style={{borderBottomWidth:1, borderBottomColor:'#333333', paddingBottom:15}}/>            
                            </View>                            
                        </View>
                    ); 
                    }) : <Text style={styles.endereco}>Nenhum Cartao Cadastrado</Text>  }                                      
            </View>                                         
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate("Pagamento")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center"}}>Adicionar Novo Cartão</Text>
                </TouchableOpacity>            
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
export default CadastroCartao;