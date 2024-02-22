import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './screens/AppNavigator';
//import MoreScreen from './screens/moreStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;





