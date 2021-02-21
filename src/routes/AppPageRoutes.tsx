import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Localizacao from '../pages/Mapa';
import Menu from '../pages/Menu';
import Viagem from '../pages/Viagem';
import Cartao from '../pages/Cartao';

const { Navigator, Screen } = createStackNavigator();

function AppPageRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Menu"
        component={Menu}
      />
      <Screen
        name="Viagem"
        component={Viagem}
      />
      <Screen
        name="Localizacao"
        component={Localizacao}
      />
      <Screen
        name="Cartao"
        component={Cartao}
      />
    </Navigator>
  );
}
export default AppPageRoutes;