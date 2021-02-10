import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Home/home';
import Necessidades from '../pages/Necessidades';
import Entrar from '../pages/Entrar';
import Localizacao from '../pages/Mapa';
import Menu from '../pages/Menu';
import Cadastro from '../pages/Cadastro';
import Pagamento from '../pages/Pagamento';
import Senha from '../pages/Senha';
import Telefone from '../pages/Telefone';
import Viagem from '../pages/Viagem';
import Cartao from '../pages/Cartao';


const { Navigator, Screen } = createStackNavigator();

function AppPageRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Login"
        component={Login}
      />
      <Screen
        name="Viagem"
        component={Viagem}
      />
      <Screen
        name="Cartao"
        component={Cartao}
      />
      <Screen
        name="Necessidades"
        component={Necessidades}
      />
      <Screen
        name="Pagamento"
        component={Pagamento}
      />
      <Screen
        name="Menu"
        component={Menu}
      />
      <Screen
        name="Senha"
        component={Senha}
      />
      <Screen
        name="Telefone"
        component={Telefone}
      />
      <Screen
        name="Cadastro"
        component={Cadastro}
      />
      <Screen
        name="Entrar"
        component={Entrar}
      />
      <Screen
        name="Localizacao"
        component={Localizacao}
      />
    </Navigator>
  );
}
export default AppPageRoutes;