import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import Routes from './src/routes';
import {AuthProvider} from "./src/context/Auth"


const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
            <Routes/>
        </AuthProvider>
      </NavigationContainer>
    </>        
  );
};
console.disableYellowBox = true;
export default App;