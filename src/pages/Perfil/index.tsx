import React, { Component, useRef, useState, useEffect, useContext } from 'react';
import styles from './styles'
import {
    View,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Image,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthContext from '../../context/Auth';
const { width: screenWidth } = Dimensions.get('window')

//import * as firebase from 'firebase-tools';
//import 'firebase/firestore'
//import {firebaseConfig} from '../../back/confgFireBase'

function Perfil() {

    const { navigate } = useNavigation();
    const { signOut, user } = useContext(AuthContext);
    

    return (
        <KeyboardAvoidingView style={styles.container}>              
            <View style={styles.info}>
            <Image 
        style= {{width: 80, height: 80, marginTop:22, marginLeft:20, borderRadius:100, borderColor:'#fff', borderWidth:3, backgroundColor:'#c0c0c0'}}
        source={require('../../img/user9.png')}
            />
            <Text style={{fontSize:25, color:'#1c1c1c', textAlign:'center', marginTop: 48, fontWeight:'bold', paddingLeft: 15, maxWidth: 290}}>Olá, {user?.nome} !</Text>
            </View>
           
            <View style={{justifyContent:'flex-start', width:'100%', alignItems:'flex-start', paddingLeft:25}}>
            <Text style={{textAlign:'right', fontSize:20, color:'#fff', paddingTop: 60, lineHeight:25}}>{user?.telefone}</Text>
            <Text style={{textAlign:'left', fontSize:20, color:'#fff', paddingTop:6}}>{user?.email}</Text>

            <TouchableOpacity > 
                    <Text style={styles.link}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.botoes}>
                
                <TouchableOpacity style={styles.button3} onPress={() => navigate("CadastroCartao")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight:'bold'}}>Pagamento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4} onPress={() => navigate("Viagem")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight:'bold'}}>Minhas Viagens</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button5} onPress={() => navigate("NovaSenha")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight:'bold'}}>Trocar Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button6} onPress={() => navigate("Localizacao")}>
                    <Text style={{ fontSize: 20, color: '#1c1c1c', alignItems: "center", fontWeight:'bold'}}>Mapa</Text>
                </TouchableOpacity>        
            </View>
        </KeyboardAvoidingView>
    );
}
export default Perfil;