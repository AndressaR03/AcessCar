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
    Button
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
        <ScrollView style={styles.scrollView}>
            <KeyboardAvoidingView style={styles.container}>
                <View>
                    <Text style={styles.cadastro}>Necessidades</Text>
                    <Text style={styles.intro2}>Conte-nos um pouco mais sobre você!</Text>
                    {/* <Text style={styles.intro}>Falta pouco!</Text> */}

                </View >
                <View style={styles.visao}>
                    <Text style={styles.intro}>Selecione o grau de perda de visão:</Text>
                    <SwitchSelector style={{ flex: 1, width: 300, marginTop: 10, marginBottom: 30 }}
                        options={options}
                        initial={0}
                        onPress={value => console.log(`Call onPress with value: ${value}`)}
                        buttonColor={'#19cdce'}
                        textColor={"#ffffff"}
                        selectedColor={'#000000'}
                        backgroundColor={'#333333'}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 38 }}>
                    <Text style={styles.intro}>Utiliza cão guia:</Text>
                    <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft: 65 }}
                        options={options2}
                        initial={0}
                        onPress={value => console.log(`Call onPress with value: ${value}`)}
                        buttonColor={'#19cdce'}
                        textColor={"#ffffff"}
                        selectedColor={'#000000'}
                        backgroundColor={'#333333'}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 38 }}>
                    <Text style={styles.intro}>Possui acompanhante:</Text>
                    <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft: 18 }}
                        options={options3}
                        initial={0}
                        onPress={value => console.log(`Call onPress with value: ${value}`)}
                        buttonColor={'#19cdce'}
                        textColor={"#ffffff"}
                        selectedColor={'#000000'}
                        backgroundColor={'#333333'}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 38 }}>
                    <Text style={styles.intro}>Faz uso de bengala:</Text>
                    <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft: 38 }}
                        options={options4}
                        initial={0}
                        onPress={value => console.log(`Call onPress with value: ${value}`)}
                        buttonColor={'#19cdce'}
                        textColor={"#ffffff"}
                        selectedColor={'#000000'}
                        backgroundColor={'#333333'}
                    />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Senha")}>
                        <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Voltar</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Pagamento")}>
                        <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center" }}>Próximo</Text>
                    </TouchableOpacity>   
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
export default Necessidades;
