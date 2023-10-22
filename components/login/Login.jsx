import React from 'react';
import {Text, View, SafeAreaView, Pressable} from 'react-native';

import loginStyles from './style/loginStyles';

const Login = () => {
  return (
    <>
      <SafeAreaView style={loginStyles.mainContainer}>
        <View style={loginStyles.loginContainer}>
          <View style={loginStyles.topSection}>
            <Text style={loginStyles.message}>Acceda y encuentre su hogar</Text>
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
              onPress={() => console.log('Ingreso Inmobiliarias --')}
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
