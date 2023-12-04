/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import Home from '../home/Home';
import NewRealState from '../newRealState/NewRealState';
import Notification from '../notification/Notification';
import User from '../user/User';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Image} from 'react-native';
import RenterTabs from './RenterNavigation';

const BottomTabs = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  const route = useRoute();
  const {userType} = route.params;
  console.log('console log props: ', userType);

  if (userType === 'realstate') {
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
  }
  return (
    <>
      <RenterTabs />
    </>
  );
};

export default BottomTabs;
