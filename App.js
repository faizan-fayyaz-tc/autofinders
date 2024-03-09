import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./screens/AppNavigator";
//import MoreScreen from './screens/moreStack';
import { UserContextProvider } from "./context/userContext";

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
