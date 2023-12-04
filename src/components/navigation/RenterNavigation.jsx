/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RenterHome from '../home/RenterHome';
import NewRealState from '../newRealState/NewRealState';
import Notification from '../notification/Notification';
import User from '../user/User';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

const RenterTabs = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: 'white',
        }}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#159690',
          },
          tabBarStyle: {
            backgroundColor: '#159690',
          },
          headerTintColor: 'white',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: 'white',
        }}
        tabBarLabel={{
          color: 'black',
        }}>
        <Tab.Screen
          name="home"
          options={{
            title: '',
            tabBarIcon: () => (
              <FontAwesome6
                name="house"
                style={{fontSize: 20, color: 'black', marginTop: 12}}
              />
            ),
          }}
          component={RenterHome}
        />
        <Tab.Screen
          name="notification"
          options={{
            title: '',
            tabBarIcon: () => (
              <Ionicons
                name="star-outline"
                style={{
                  fontSize: 20,
                  color: 'black',
                  marginTop: 12,
                }}
              />
            ),
          }}
          component={Notification}
        />
        <Tab.Screen
          name="user"
          options={{
            title: 'Perfil',
            tabBarIcon: () => (
              <FontAwesome6
                name="user"
                style={{fontSize: 20, color: 'black', marginTop: 12}}
              />
            ),
          }}
          component={User}
        />
      </Tab.Navigator>
    </>
  );
};

export default RenterTabs;
