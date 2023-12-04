import React from 'react';
import {Text, View, SafeAreaView, Pressable, Image} from 'react-native';

import loginStyles from './style/loginStyles';

const Home = ({navigation}) => {
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Home Page</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
