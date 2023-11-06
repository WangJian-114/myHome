/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import NewRealState from '../newRealState/NewRealState';
import Notification from '../notification/Notification';
import User from '../user/User';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Text, View, Image} from 'react-native';

const BottomTabs = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

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
          tabBarActiveTintColor: 'red',
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
          component={Home}
        />
        <Tab.Screen
          name="add-real-state"
          options={{
            headerTitle: 'Agregar una propiedad',
            tabBarLabel: '',
            tabBarIcon: () => (
              <FontAwesome6
                name="plus"
                style={{fontSize: 25, color: 'black', marginTop: 12}}
              />
            ),
          }}
          component={NewRealState}
        />
        <Tab.Screen
          name="notification"
          options={{
            title: '',
            tabBarIcon: () => (
              <FontAwesome6
                name="message"
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
            title: '',
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

export default BottomTabs;
