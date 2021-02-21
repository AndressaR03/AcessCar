import React, {createContext, useState, useEffect} from 'react';
import * as auth from '../services/auth';
import useAsyncStore from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children }: any) {
    const [user, setUser] = useState<object|null>(null);
    const [loading, setLoading] = useState(true);

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

    async function signIn(){
       const response = await auth.signIn();
       setUser(response.user);

       await AsyncStorage.setItem('@AcessCar:user', JSON.stringify(response.user));
       await AsyncStorage.setItem('@AcessCar:token', JSON.stringify(response.token));
    }

    async function  signOut(){
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    
    return(
    <AuthContext.Provider value={{signed: !!user, loading, user, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
    );
}


export default AuthContext;