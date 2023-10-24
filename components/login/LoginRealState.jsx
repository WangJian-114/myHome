import React from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';

import loginStyles from './style/loginStyles';

const LoginRealState = () => {
  return (
    <>
      <SafeAreaView style={loginStyles.mainContainer}>
        <View style={loginStyles.loginContainer}>
          <View style={loginStyles.topSection}>
            <View style={loginStyles.logoContainer}>
              <Image
                style={loginStyles.logo}
                source={require('../../assets/img/logo.png')}
              />
            </View>
            <Text style={loginStyles.message}>
              Ingrese su email y contraseña
            </Text>
            <TextInput
              placeholder="Correo electronico"
              style={loginStyles.loginTextInput}
              maxHeight={100}
            />
            <TextInput
              placeholder="Contraseña"
              style={loginStyles.loginTextInput}
              secureTextEntry
            />
            <Pressable>
              <Text style={loginStyles.forgetPass}>Olvide mi contraseña</Text>
            </Pressable>
          </View>

          <View>
            <Pressable>
              <Text style={loginStyles.NoAcount}>¿No tenes cuenta?</Text>
            </Pressable>

            <Pressable
              onPress={() => console.log('Ingreso Inmobiliarias --')}
              style={loginStyles.realStateButton}>
              <Text style={loginStyles.realStateButtonText}>Continuar</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginRealState;
