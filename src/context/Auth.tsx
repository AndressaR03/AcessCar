import React, {createContext, useState, useEffect} from 'react';
import useAsyncStore from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { RNFirebase } from 'react-native-firebase';
import firebase from 'react-native-firebase';
import Api from '../services/api';


interface AuthContextData {
    signed: boolean;
    user:   any ;
    loading: boolean;
    email: string;
    password: string;
    setEmail: any;
    setPassword: any;
    signIn(email: string, senha:string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children }: any) {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState<string >('');
    const [password, setPassword] = useState<string >('');

    useEffect(() => {
        async function loadStoragedData(){
            
            const storageUser = await AsyncStorage.getItem('@AcessCar:user');
            const storageToken = await AsyncStorage.getItem('@AcessCar:token');

            if(storageUser && storageToken){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }
        loadStoragedData();
    }, []);

    async function signIn(email:string, senha:string){
                 try {
                let userr = await Api.loginWithEmailAndPassword(email, senha)
      
                let dadosUser: any
                var valor = userr.user?.email
                var uid = userr.user?.uid
                console.log(uid);
                //procura usuario pelo documento
                let usuarioNoBanco = await Api.pegaUsuario(uid)
                dadosUser = usuarioNoBanco
                setUser(dadosUser);
                await AsyncStorage.setItem('@AcessCar:user', JSON.stringify(dadosUser)); 
                await AsyncStorage.setItem('@AcessCar:token', (dadosUser?.id));              
            } catch (error) {
                alert('errro ao achar usuario')
            }
    }

    async function  signOut(){
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    
    return(
    <AuthContext.Provider value={{signed: !!user, loading, user, signIn, signOut, password, setPassword, setEmail, email}}>
        {children}
    </AuthContext.Provider>
    );
}


export default AuthContext;