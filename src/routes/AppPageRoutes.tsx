import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Home';
import Entrar from '../pages/Entrar';
import Localizacao from '../pages/Mapa';
import VoiceComand from '../pages/Voice';
import Menu from '../pages/Menu';
import Cadastro from '../pages/Cadastro';

const {Navigator, Screen} = createStackNavigator ();

function AppPageRoutes () {
    return(
    <Navigator screenOptions= {{headerShown: false}}>
                   
          <Screen 
          name="Localizacao" 
          component={Localizacao}
        /> 
        <Screen
          name="Voice" 
          component={VoiceComand} 
          />
         <Screen 
          name="Login"
          component={Login}
        />        
        <Screen 
          name="Menu"
          component={Menu}
        />       
        
        <Screen  
          name="Cadastro" 
           component={Cadastro}
        />        
        <Screen 
         name="Entrar" 
         component={Entrar}
         /> 
        
    </Navigator>
    );
}
export default AppPageRoutes;