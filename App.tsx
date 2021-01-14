import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes/AppPageRoutes';

const App = () => {
  return (
    <>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
    </>        
  );
};
export default App;