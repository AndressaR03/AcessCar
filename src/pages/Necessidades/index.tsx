import React, { useState, useContext } from 'react'
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
import SwitchSelector, { ISwitchSelectorOption } from "react-native-switch-selector";
import PassageiroContext from "../../context/Passageiro"

//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'


function Necessidades() {

    const {setGrauDeficiencia,setCaoGuia, setAcompanhante, setBengala, CadastrarPassageiro, cadastro} = useContext(PassageiroContext);

    const { navigate } = useNavigation();
    

    const options = [
        { label: "leve", value: "leve" },
        { label: "moderada", value: "moderada" },
        { label: "grave", value: "grave" }
    ];
    const options2 = [
        { label: "não", value: false },
        { label: "sim", value: true },
    ];
    const options3 = [
        { label: "não", value: false },
        { label: "sim", value: true },
    ];
    const options4 = [
        { label: "não", value: false },
        { label: "sim", value: true },
    ];

    async function SaveDataNext() {
        await CadastrarPassageiro();
        if(cadastro){
            navigate('Entrar');
        };       
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{ flex: 8 }}>
                <Text style={{ fontSize: 28, color: '#19cdce', textAlign: 'center' }}>NECESSIDADES</Text>
                <Text style={{ fontSize: 16, color: '#fff', paddingTop: 5, textAlign: 'center' }}>Conte-nos um pouco mais sobre você!</Text>
                <View style={{ flexDirection: 'column', alignSelf: 'flex-start' }}>
                    <Text style={styles.selecao}>Selecione o grau de perda de visão</Text>
                    <SwitchSelector style={{ width: 320, marginTop: 20, marginBottom: 40, backgroundColor: '#333333', borderRadius: 15 }}
                        options={options}
                        initial={0}
                        onPress={value => setGrauDeficiencia(value)}
                        buttonColor={'#19cdce'}
                        textColor={"#ffffff"}
                        selectedColor={'#000000'}
                        backgroundColor={'#333333'}
                        fontSize={18}
                        borderRadius={20}
                    />
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#333333', paddingBottom: 15 }} />
                <Text style={styles.selecao2}>Selecione os itens que utiliza no dia a dia</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', width: 320, backgroundColor: '#333333', borderRadius: 5, marginTop: 20 }}>
                    <Text style={styles.intro}>Utiliza cão guia:</Text>
                    <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft: 70, paddingBottom: 10 }}
                        options={options2}
                        initial={0}
                        onPress={value => setCaoGuia(value)}
                        buttonColor={'#19cdce'}
                        textColor={"#ffffff"}
                        selectedColor={'#000000'}
                        backgroundColor={'#1a1a1a'}
                        fontSize={16}
                        borderRadius={20}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', width: 320, backgroundColor: '#333333', borderRadius: 5, marginTop: 20 }}>
                    <Text style={styles.intro}>Possui acompanhante:</Text>
                    <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft: 19, paddingBottom: 10 }}
                        options={options3}
                        initial={0}
                        onPress={value => setAcompanhante(value)}
                        buttonColor={'#19cdce'}
                        textColor={"#ffffff"}
                        selectedColor={'#000000'}
                        backgroundColor={'#1a1a1a'}
                        fontSize={16}
                        borderRadius={20}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', width: 320, backgroundColor: '#333333', borderRadius: 5, marginTop: 20 }}>
                    <Text style={styles.intro}>Faz uso de bengala:</Text>
                    <SwitchSelector style={{ width: 120, marginTop: 10, marginLeft: 40, paddingBottom: 10 }}
                        options={options4}
                        initial={0}
                        onPress={value => setBengala(value)}
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
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight: 'bold', }}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={SaveDataNext}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight: 'bold', }}>Concluir</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
export default Necessidades;
