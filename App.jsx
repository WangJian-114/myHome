import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import Login from './components/login/Login';

const App = () => {
  console.log('CONSOEL HOLA');
  return (
    <>
      <Login />
    </>
  );
};

export default App;
