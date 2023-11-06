import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';

import homeStyles from './style/homeStyles';
import Card from '../card/Card';

const Home = ({navigation}) => {
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={homeStyles.homeContainer}>
          <Text style={homeStyles.homeSubtitle}>2 Propiedades publicadas</Text>
          <View style={homeStyles.cardSection}>
            <Card />
            <Card />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
