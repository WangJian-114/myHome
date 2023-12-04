import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';

import homeStyles from './style/homeStyles';
import Card from '../card/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PERMISSIONS, check, request} from 'react-native-permissions';

const RenterHome = ({navigation}) => {
  const goFilterView = () => {
    console.log('CONSOLE Filter');
    navigation.navigate('filter');
  };

  const getRenterItems = () => {
    console.log('CONSOLE FILTER POR ALQUILAR');
  };

  const getSellItems = () => {
    console.log('CONSOLE FILTER POR SELL');
  };

  const checkLocationPermission = async () => {
    let permissionStatus;

    if (Platform.OS === 'ios') {
      // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    console.log({permissionStatus});
  };

  useEffect(() => {
    checkLocationPermission();
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={homeStyles.homeContainer}>
          <View style={homeStyles.filterContainer}>
            <Pressable
              onPress={() => getSellItems()}
              style={homeStyles.buyButton}>
              <Text style={homeStyles.buttonText}>COMPRAR</Text>
            </Pressable>

            <Pressable
              onPress={() => getRenterItems()}
              style={homeStyles.rentButton}>
              <Text style={homeStyles.buttonText}>Alquilar</Text>
            </Pressable>

            <Pressable
              style={homeStyles.filterIcon}
              onPress={() => goFilterView()}>
              <Ionicons
                name="filter"
                style={{
                  fontSize: 25,
                  color: 'black',
                  textAlign: 'right',
                }}
              />
            </Pressable>
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
