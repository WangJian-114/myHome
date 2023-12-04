import React, {useState} from 'react';

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
  const sendCode = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('new-password');
  };

  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const inputRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  const handleTextChange = (text, index) => {
    if (text.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);
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
            <Text style={passwordStyles.message}>Ingrese la clave</Text>
            <Text style={passwordStyles.messageText}>
              Una vez que ingrese la clave que se envió a su email, se le
              permitirá modificar la contraseña
            </Text>
            <View style={passwordStyles.codeContainer}>
              {inputRefs.map((inputRef, index) => (
                <TextInput
                  key={index}
                  style={passwordStyles.codeTextInput}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={text => handleTextChange(text, index)}
                  value={inputValues[index]}
                  ref={inputRef}
                />
              ))}
            </View>
          </View>

          <View>
            <Pressable
              onPress={() => sendCode()}
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
