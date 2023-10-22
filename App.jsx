import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './components/login/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('CONSOEL HOLA DESDE APP');
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
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
