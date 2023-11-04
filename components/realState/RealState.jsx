import React, {useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import loginStyles from './style/loginStyles';

const LoginRealState = ({navigation}) => {
  const navigator = useNavigation();
  const getPassword = () => {
    console.log('CONSOLE ejecute getPassword');
    navigator.navigate('password-recovery');
  };

  const setNewAccount = () => {
    console.log('CONSOLE ejecute new-account');
    navigator.navigate('new-account');
  };

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
            <Pressable onPress={() => getPassword()}>
              <Text style={loginStyles.forgetPass}>Olvide mi contraseña</Text>
            </Pressable>
          </View>

          <View>
            <Pressable onPress={() => setNewAccount()}>
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
