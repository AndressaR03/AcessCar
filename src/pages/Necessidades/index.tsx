import React from 'react'
import styles from './styles'
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";


//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'


const Necessidades = () => {
    const { navigate } = useNavigation();

    const options = [
        { label: "leve", value: "1" },
        { label: "moderada", value: "1.5" },
        { label: "grave", value: "2" }
    ];
    const options2 = [
        { label: "não", value: "1" },
        { label: "sim", value: "1.5" },
    ];
    const options3 = [
        { label: "não", value: "1" },
        { label: "sim", value: "1.5" },
    ];
    const options4 = [
        { label: "não", value: "1" },
        { label: "sim", value: "1.5" },
    ];
    function NextPageCadastrar() {
        navigate('Cadastro')
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{flex: 8}}>
                <Text style={{fontSize:28, color:'#19cdce', textAlign:'center'}}>NECESSIDADES</Text>
                <Text style={{fontSize:16, color:'#fff', paddingTop:5, textAlign:'center'}}>Conte-nos um pouco mais sobre você!</Text>
                <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
                <Text style={styles.selecao}>Selecione o grau de perda de visão</Text>
                <SwitchSelector style={{width:320, marginTop: 20, marginBottom:40, backgroundColor:'#333333', borderRadius:15 }}
                    options={options}
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    buttonColor={'#19cdce'}
                    textColor={"#ffffff"}
                    selectedColor={'#000000'}
                    backgroundColor={'#333333'}
                    fontSize={18}
                    borderRadius={20}
                />                
            </View>
            <View style={{borderBottomWidth:1, borderBottomColor:'#333333', paddingBottom:15}}/>
            <Text style={styles.selecao2}>Selecione os itens que utiliza no dia a dia</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', width:320, backgroundColor:'#333333', borderRadius:5, marginTop:20}}>
                <Text style={styles.intro}>Utiliza cão guia:</Text>
                <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft:70, paddingBottom:10}}
                    options={options2}
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    buttonColor={'#19cdce'}
                    textColor={"#ffffff"}
                    selectedColor={'#000000'}
                    backgroundColor={'#1a1a1a'}
                    fontSize={16}
                    borderRadius={20}
                />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', width:320, backgroundColor:'#333333', borderRadius:5, marginTop:20 }}>
                <Text style={styles.intro}>Possui acompanhante:</Text>
                <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft: 19, paddingBottom:10 }}
                    options={options3}
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    buttonColor={'#19cdce'}
                    textColor={"#ffffff"}
                    selectedColor={'#000000'}
                    backgroundColor={'#1a1a1a'}
                    fontSize={16}
                    borderRadius={20}
                />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', width:320, backgroundColor:'#333333', borderRadius:5, marginTop:20}}>
                <Text style={styles.intro}>Faz uso de bengala:</Text>
                <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft: 40, paddingBottom:10 }}
                    options={options4}
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    buttonColor={'#19cdce'}
                    textColor={"#ffffff"}
                    selectedColor={'#000000'}
                    backgroundColor={'#1a1a1a'}
                    fontSize={16}
                    borderRadius={20}
                />
            </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button1} onPress={() => navigate("Senha")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center",fontWeight:'bold', }}>Voltar</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button2} onPress={() => navigate("Pagamento")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center",fontWeight:'bold', }}>Avançar</Text>
                </TouchableOpacity>            
          </View>
        </KeyboardAvoidingView>
    );
}
export default Necessidades;
