import React from 'react';
import {Text, View, SafeAreaView, ScrollView, TextInput} from 'react-native';

import filterStyles from './styles/filterStyles';
import Card from '../card/Card';

const Filter = ({navigation}) => {
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Notification Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Filter;
