import React from 'react';
import {Text, View, SafeAreaView, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import loginStyles from './style/loginStyles';

const Login = () => {
  const navigation = useNavigation();
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

  const goHome = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('home-tabs-navigation', {
      userType: 'renter',
    });
  };

  const goRealStateHome = () => {
    navigation.navigate('home-tabs-navigation', {
      userType: 'realstate',
    });
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
            <Text style={loginStyles.message}>Acceda y encuentre su hogar</Text>
            <Pressable
              onPress={() => goHome()}
              style={loginStyles.googleButton}>
              <Text style={loginStyles.googleButtonText}>
                Ingreso con Google
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable
              onPress={() => goRealStateHome()}
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
