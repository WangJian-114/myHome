import React from 'react';
import {Text, View, SafeAreaView, Pressable, Image} from 'react-native';

import loginStyles from './style/loginStyles';

const Login = ({navigation}) => {
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

  return (
    <>
      <SafeAreaView style={loginStyles.mainContainer}>
        <View style={loginStyles.loginContainer}>
          <View style={loginStyles.topSection}>
            <Text style={loginStyles.message}>Registro de Inmobiliaria</Text>
            <Pressable
              onPress={() => console.log('Ingreso User --')}
              style={loginStyles.googleButton}>
              <Text style={loginStyles.googleButtonText}>
                Ingreso con Google
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable
              onPress={() => loginRealState()}
              style={loginStyles.realStateButton}>
              <Text style={loginStyles.realStateButtonText}>
                Ingreso Inmobiliarias
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
