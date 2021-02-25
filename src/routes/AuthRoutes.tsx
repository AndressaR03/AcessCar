import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../pages/Home/home"; 
import Necessidades from '../pages/Necessidades';
import Entrar from '../pages/Entrar';
import Localizacao from '../pages/Mapa';
import Cadastro from '../pages/Cadastro';
import Pagamento from '../pages/Pagamento';
import Senha from '../pages/Senha';
import Telefone from '../pages/Telefone';
import Viagem from '../pages/Viagem';


const AuthStack = createStackNavigator();

function AuthRoutes() {
   return( 
   <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
          name="Login"
          component={Login}
      />
      <AuthStack.Screen
        name="Necessidades"
        component={Necessidades}
      />
      <AuthStack.Screen
        name="Pagamento"
        component={Pagamento}
      />
      <AuthStack.Screen
        name="Senha"
        component={Senha}
      />
      <AuthStack.Screen
        name="Telefone"
        component={Telefone}
      />
      <AuthStack.Screen
        name="Cadastro"
        component={Cadastro}
      />
      <AuthStack.Screen
        name="Entrar"
        component={Entrar}
      />
    </AuthStack.Navigator>
    );
}

export default AuthRoutes;