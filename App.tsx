import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import Routes from './src/routes/AppPageRoutes';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <PaperProvider>
          <Routes/>
        </PaperProvider>
      </NavigationContainer>
    </>        
  );
};
console.disableYellowBox = true;
export default App;