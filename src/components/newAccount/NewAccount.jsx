import React from 'react';
import {Text, View, SafeAreaView, Pressable, TextInput} from 'react-native';

import newAccountStyles from './style/newAccountStyles';

const Login = ({navigation}) => {
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

  return (
    <>
      <SafeAreaView style={newAccountStyles.mainContainer}>
        <View style={newAccountStyles.newAccountContainer}>
          <View style={newAccountStyles.topSection}>
            <Text style={newAccountStyles.message}>
              Registro de Inmobiliaria
            </Text>
            <Text style={newAccountStyles.text}>
              Complete los siguientes datos
            </Text>
            <TextInput
              placeholder="Nombre Inmobiliaria"
              style={newAccountStyles.textInput}
            />
            <TextInput
              placeholder="Correo electronico"
              style={newAccountStyles.textInput}
            />
            <TextInput
              placeholder="Contraseña"
              style={newAccountStyles.textInput}
            />
            <TextInput
              placeholder="Repetir contraseña"
              style={newAccountStyles.textInput}
            />
            <TextInput
              placeholder="Mail de contacto"
              style={newAccountStyles.textInput}
            />
          </View>

          <View>
            <Pressable
              onPress={() => loginRealState()}
              style={newAccountStyles.continueButton}>
              <Text style={newAccountStyles.continueButtonText}>
                Crear cuenta
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
