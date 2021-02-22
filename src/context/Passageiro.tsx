import React, { createContext, useState, useEffect } from 'react';
import useAsyncStore from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { RNFirebase } from 'react-native-firebase';
import firebase from 'react-native-firebase';
import Api from '../services/api';
import {Alert} from 'react-native';


interface PassageiroContextData {
    nome: string,
    setNome: any,
    cpf: string,
    setCPF: any,
    email: string,
    setEmail: any,
    telefone: string,
    setTelefone: any,
    senha: string,
    setSenha: any,
    grauDeficiencia: any,
    setGrauDeficiencia: any,
    caoGuia: any
    setCaoGuia: any,
    acompanhante: any,
    setAcompanhante: any,
    bengala: any,
    cadastro: boolean,
    setBengala: any,
    CadastrarPassageiro(): Promise<void>,
}

const PassageiroContext = createContext<PassageiroContextData>({} as PassageiroContextData);

export function PassageiroProvider({ children }: any) {
    const [cadastro, setCadastro] = useState(false);
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState<string>('');
    const [grauDeficiencia, setGrauDeficiencia] = useState('leve');
    const [caoGuia, setCaoGuia] = useState(false);
    const [acompanhante, setAcompanhante] = useState(false);
    const [bengala, setBengala] = useState(false);

    useEffect(() => { }, []);

    function clearData(){
        //setCadastro(false);
        setNome('');
        setCPF('');
        setEmail('');
        setTelefone('');
        setSenha('');
        setGrauDeficiencia("");
        setCaoGuia(false);
        setAcompanhante(false);
        setBengala(false);
    }

    async function CadastrarPassageiro() {
        const dados = {
            nome: nome, cpf: cpf, email: email, telefone: telefone, senha: senha, grauDeficiencia: grauDeficiencia,
            caoGuia: caoGuia, acompanhante: acompanhante, bengala: bengala
        }
        try {
            let passageiro = await Api.cadastraPassageiro(dados);
            if (passageiro == true) {
                setCadastro(true);
                alert("Usuário cadastrado com sucesso!");
            }
        } catch (error) {
            alert('errro ao cadastrar usuario')
        }
        clearData();
    }

    return (
        <PassageiroContext.Provider value={{
            nome, setNome, cpf, setCPF, email, setEmail, telefone, setTelefone,
            senha, setSenha, grauDeficiencia, setGrauDeficiencia, caoGuia, setCaoGuia, acompanhante,
            setAcompanhante, bengala, setBengala, CadastrarPassageiro, cadastro
        }}>
            {children}
        </PassageiroContext.Provider>
    );
}


export default PassageiroContext;