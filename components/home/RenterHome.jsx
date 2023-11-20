import React from 'react';
import {Text, View, SafeAreaView, ScrollView, Pressable} from 'react-native';

import homeStyles from './style/homeStyles';
import Card from '../card/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RenterHome = ({navigation}) => {
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
          <View style={homeStyles.filterContainer}>
            <Pressable
              onPress={() => loginRealState()}
              style={homeStyles.buyButton}>
              <Text style={homeStyles.buttonText}>COMPRAR</Text>
            </Pressable>

            <Pressable
              onPress={() => loginRealState()}
              style={homeStyles.rentButton}>
              <Text style={homeStyles.buttonText}>Alquilar</Text>
            </Pressable>

            <View style={homeStyles.filterIcon}>
              <Ionicons
                name="filter"
                style={{
                  fontSize: 25,
                  color: 'black',
                  textAlign: 'right',
                }}
              />
            </View>
          </View>
          <View>
            <Text style={homeStyles.homeSubtitle}>
              Propiedades cerca de ti!
            </Text>
          </View>

          <View style={homeStyles.cardSection}>
            <Card type="renter" />
            <Card type="renter" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RenterHome;
