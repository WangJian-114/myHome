import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/components/login/Login';
import LoginRealState from './src/components/login/LoginRealState';
import PasswordRecovery from './src/components/password/Password';
import RecoveryCode from './src/components/password/RecoveryCode';
import NewPassword from './src/components/password/NewPassword';
import NewAccount from './src/components/newAccount/NewAccount';
import BottomTabs from './src/components/navigation/Navigation';
import Filter from './src/components/filter/Filter';
import ItemDetails from './src/components/itemDetails/ItemDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('CONSOEL HOLA DESDE APP');
  return (
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
        <Stack.Screen
          name="filter"
          component={Filter}
          options={{
            title: 'Aplicar Filtro',
          }}
        />
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetails}
          options={{
            title: 'Departamento',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
