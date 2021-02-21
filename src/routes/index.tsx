import React, {useContext} from 'react';
import { auth } from 'react-native-firebase';
import { RouteProps } from 'react-router';
import {ActivityIndicator, View} from 'react-native';
import AuthContext from '../context/Auth';
import AppPageRoutes from './AppPageRoutes'
import AuthRoutes from "./AuthRoutes";


function Routes () {
    const {signed, loading} = useContext(AuthContext);

    if(loading){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: "#1C1C1C"}}>
                <ActivityIndicator size="large" color="#19cdce"/>
            </View>
        );
    }
    return signed ? <AppPageRoutes/> : <AuthRoutes />;
};

export default Routes;