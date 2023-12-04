import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from 'react-native';

import passwordStyles from './style/passwordStyles';

const Login = ({navigation}) => {
  const getRecoveryCode = () => {
    console.log('CONSOLE ejecute password-recovery-code');
    navigation.navigate('password-recovery-code');
  };

  return (
    <>
      <SafeAreaView style={passwordStyles.mainContainer}>
        <View style={passwordStyles.passwordContainer}>
          <View style={passwordStyles.topSection}>
            <View style={passwordStyles.logoContainer}>
              <Image
                style={passwordStyles.logo}
                source={require('../../../assets/img/logo.png')}
              />
            </View>
            <Text style={passwordStyles.message}>
              ¿Olvidaste tu contraseña?
            </Text>
            <Text style={passwordStyles.messageText}>
              ¡No te preocupes! Te enviaremos un email que te ayudará a resetear
              tu contraseña
            </Text>
            <TextInput
              placeholder="Correo electronico"
              style={passwordStyles.passwordTextInput}
              maxHeight={100}
            />
          </View>

          <View>
            <Pressable
              onPress={() => getRecoveryCode()}
              style={passwordStyles.continueButton}>
              <Text style={passwordStyles.continueButtonText}>Continuar</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
