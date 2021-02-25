import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Localizacao from '../pages/Mapa';
import Viagem from '../pages/Viagem';
import Perfil from '../pages/Perfil';
import CadastroCartao from '../pages/CadastroCartao';
import Pagamento from '../pages/Pagamento';
import NovaSenha from '../pages/NovaSenha';

const { Navigator, Screen } = createStackNavigator();

function AppPageRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Perfil"
        component={Perfil}
      />
      <Screen
        name="Localizacao"
        component={Localizacao}
      />
      <Screen
        name="NovaSenha"
        component={NovaSenha}
      />
      <Screen
        name="CadastroCartao"
        component={CadastroCartao}
      />
      <Screen
        name="Pagamento"
        component={Pagamento}
      />
      <Screen
        name="Viagem"
        component={Viagem}
      />
            
    </Navigator>
  );
}
export default AppPageRoutes;