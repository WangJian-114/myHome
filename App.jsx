import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './components/login/Login';
import LoginRealState from './components/login/LoginRealState';
import PasswordRecovery from './components/password/Password';
import RecoveryCode from './components/password/RecoveryCode';
import NewPassword from './components/password/NewPassword';
import NewAccount from './components/newAccount/NewAccount';

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
          <Stack.Screen
            name="password-recovery"
            component={PasswordRecovery}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#159690',
              },
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="password-recovery-code"
            component={RecoveryCode}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#159690',
              },
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="new-password"
            component={NewPassword}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#159690',
              },
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="new-account"
            component={NewAccount}
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
