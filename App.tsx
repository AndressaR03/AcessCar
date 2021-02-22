import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';
import { AuthProvider } from "./src/context/Auth"
import { PassageiroProvider } from './src/context/Passageiro'
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <PassageiroProvider>
            <Routes />
          </PassageiroProvider>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};
export default App;