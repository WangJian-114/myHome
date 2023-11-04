import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './components/login/Login';
import LoginRealState from './components/login/LoginRealState';
import PasswordRecovery from './components/password/Password';
import RecoveryCode from './components/password/RecoveryCode';
import NewPassword from './components/password/NewPassword';
import NewAccount from './components/newAccount/NewAccount';
import BottomTabs from './components/navigation/Navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('CONSOEL HOLA DESDE APP');
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#159690',
            },
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="login-real-state"
            component={LoginRealState}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="password-recovery"
            component={PasswordRecovery}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="password-recovery-code"
            component={RecoveryCode}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="new-password"
            component={NewPassword}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="new-account"
            component={NewAccount}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="home-tabs-navigation"
            component={BottomTabs}
            options={{
              title: '',
              // headerBackTitle: 'holalala',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
