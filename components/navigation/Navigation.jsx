import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, SafeAreaView, Pressable, Image} from 'react-native';
import Home from '../home/Home';
import NewRealState from '../newRealState/NewRealState';
import Notification from '../notification/Notification';
import User from '../user/User';

import loginStyles from './style/loginStyles';

const BottomTabs = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="add-real-state" component={NewRealState} />
        <Tab.Screen name="notification" component={Notification} />
        <Tab.Screen name="user" component={User} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
