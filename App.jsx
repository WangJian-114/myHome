import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './components/login/Login';
import LoginRealState from './components/login/LoginRealState';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('CONSOEL HOLA DESDE APP');
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#159690',
              },
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="login-real-state"
            component={LoginRealState}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#159690',
              },
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
